# Docker Setup for Demo Next.js App

This document explains how to build and run the demo Next.js application using Docker.

## 📦 Architecture

The Dockerfile uses a **multi-stage build** approach:

1. **Builder Stage**: Builds the Next.js application (static export)
2. **Compressor Stage**: Pre-compresses static assets with gzip
3. **Production Stage**: Serves files using nginx (lightweight, ~30MB)

## 🚀 Quick Start

### Build the Docker Image

```bash
docker build -t demo-nextjs-app:latest .
```

### Run the Container

```bash
docker run -d -p 8080:80 --name demo-nextjs demo-nextjs-app:latest
```

### Access the Application

Open your browser: http://localhost:8080

### Stop the Container

```bash
docker stop demo-nextjs
docker rm demo-nextjs
```

## 🔧 Advanced Usage

### Build with Custom Tag

```bash
docker build -t demo-nextjs-app:v1.0.0 .
```

### Run with Environment Variables

```bash
docker run -d -p 8080:80 \
  -e NODE_ENV=production \
  --name demo-nextjs \
  demo-nextjs-app:latest
```

### Run with Volume Mount (for logs)

```bash
docker run -d -p 8080:80 \
  -v $(pwd)/logs:/var/log/nginx \
  --name demo-nextjs \
  demo-nextjs-app:latest
```

### Check Container Logs

```bash
docker logs demo-nextjs
```

### Execute Shell in Running Container

```bash
docker exec -it demo-nextjs sh
```

## 🏗️ Build Details

### Image Layers

1. **Base**: `node:20-alpine` (~180MB)
2. **Dependencies**: npm packages
3. **Build**: Next.js static export
4. **Final**: `nginx:alpine` (~30MB)

### Optimizations

- ✅ Multi-stage build (smaller final image)
- ✅ Pre-compressed assets (gzip)
- ✅ nginx caching headers
- ✅ Non-root user (security)
- ✅ Health check endpoint
- ✅ .dockerignore (faster builds)

### Build Time

- First build: ~2-3 minutes
- Cached build: ~30 seconds

## 🔍 Testing

### Test Health Check

```bash
curl http://localhost:8080/health
# Expected: "healthy"
```

### Test Pages

```bash
# Home page
curl http://localhost:8080/

# About page
curl http://localhost:8080/about

# Contact page
curl http://localhost:8080/contact
```

### Test Docker Health Check

```bash
docker inspect --format='{{.State.Health.Status}}' demo-nextjs
# Expected: "healthy"
```

## 🐛 Troubleshooting

### Build Fails

**Issue**: npm install fails
```bash
# Solution: Clear npm cache
docker build --no-cache -t demo-nextjs-app:latest .
```

### Container Exits Immediately

**Issue**: nginx fails to start
```bash
# Check logs
docker logs demo-nextjs

# Check nginx config syntax
docker run --rm demo-nextjs-app:latest nginx -t
```

### Port Already in Use

**Issue**: Port 8080 already bound
```bash
# Use different port
docker run -d -p 8081:80 --name demo-nextjs demo-nextjs-app:latest
```

### Permission Denied

**Issue**: Cannot write to /var/log/nginx
```bash
# This shouldn't happen as we use non-root user
# Check file permissions in container
docker exec demo-nextjs ls -la /var/log/nginx
```

## 📊 Production Deployment

### Push to Container Registry

```bash
# Tag for registry
docker tag demo-nextjs-app:latest gcr.io/appointy-global/demo-nextjs-app:v1.0.0

# Push to Google Container Registry
docker push gcr.io/appointy-global/demo-nextjs-app:v1.0.0

# Or Artifact Registry
docker tag demo-nextjs-app:latest us-central1-docker.pkg.dev/appointy-global/backstage/demo-nextjs-app:v1.0.0
docker push us-central1-docker.pkg.dev/appointy-global/backstage/demo-nextjs-app:v1.0.0
```

### Run from Registry

```bash
docker run -d -p 80:80 \
  --name demo-nextjs \
  us-central1-docker.pkg.dev/appointy-global/backstage/demo-nextjs-app:v1.0.0
```

## 🔒 Security

### Non-Root User

Container runs as user `nonroot` (UID: 10001) for security.

### Security Headers

nginx is configured with:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`

### Scan for Vulnerabilities

```bash
# Using Docker scan
docker scan demo-nextjs-app:latest

# Using Trivy
trivy image demo-nextjs-app:latest
```

## 📈 Monitoring

### Container Stats

```bash
docker stats demo-nextjs
```

### Expected Resource Usage

- **Memory**: ~50MB
- **CPU**: <5%
- **Disk**: ~30MB

## 🔗 Related Files

- `Dockerfile` - Multi-stage Docker build configuration
- `nginx.conf` - nginx server configuration
- `start-nginx.sh` - Container startup script
- `.dockerignore` - Files excluded from Docker build context

## 📚 References

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [nginx Alpine Image](https://hub.docker.com/_/nginx)
- [Docker Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

---

**Ready to containerize!** 🐳
