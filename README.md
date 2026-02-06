# Demo Next.js App

This is a demo Next.js application created to test the Backstage Platform template for Next.js applications with GCS + nginx deployment pattern.

## 📋 Overview

This demo application showcases:
- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Static site generation (SSG)
- ✅ Multiple pages (Home, About, Contact)
- ✅ Health check API endpoint
- ✅ Responsive design
- ✅ Production-ready configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production (static export)
npm run build
# or
yarn build
# or
pnpm build
```

Output will be in the `out/` directory.

### Preview Production Build

```bash
# After building, you can preview using a static server
npx serve out
```

## 📁 Project Structure

```
demo-nextjs-app/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── api/
│       └── health/
│           └── route.ts    # Health check endpoint
├── public/
│   └── favicon.ico         # Favicon
├── package.json            # Dependencies and scripts
├── next.config.js          # Next.js configuration (static export)
├── tsconfig.json           # TypeScript configuration
└── README.md              # This file
```

## 🔧 Configuration

### Static Export

The app is configured for static export in `next.config.js`:

```javascript
output: 'export'
distDir: 'out'
images: {
  unoptimized: true
}
```

This makes it compatible with the nginx deployment pattern.

### Build Version

The `SHORT_SHA` placeholder in the homepage will be replaced by Cloud Build during the CI/CD process:

```typescript
<div className="badge">v1.0.0 - Build: SHORT_SHA</div>
```

## 🏥 Health Check

Health check endpoint available at `/api/health`:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "demo-nextjs-app",
  "version": "dev"
}
```

## 🌐 Pages

1. **Home** (`/`) - Landing page with feature cards
2. **About** (`/about`) - Information about the deployment architecture
3. **Contact** (`/contact`) - Contact form with client-side interaction

## 📦 Testing with Backstage Template

To test this app with the Backstage template:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Use Backstage Template**:
   - Go to Backstage: http://localhost:3000/create
   - Select "Next.js Application" template
   - Fill in the form with your GitHub repo
   - Choose Node.js version: 20
   - Package manager: npm
   - Output mode: static

3. **Merge PRs**:
   - Review and merge the CI PR (adds Dockerfile, cloudbuild.yaml, nginx.conf)
   - Review and merge the GitOps PR (adds ArgoCD manifests)

4. **Monitor Build**:
   - Watch Cloud Build in GCP Console
   - Check GCS bucket for uploaded assets
   - View deployment in ArgoCD

## 🛠️ Files Added by Template

When you use the Backstage template, these files will be added to your repo:

- `Dockerfile` - Multi-stage build for nginx
- `cloudbuild.yaml` - CI/CD pipeline configuration
- `nginx.conf` - nginx server configuration
- `start-nginx.sh` - Container startup script

## 🔒 Security

- Non-root user (UID: 10001)
- Security headers in nginx
- No sensitive data in repository
- Environment variables via ArgoCD

## 📊 Performance

Expected metrics:
- Build time: ~3-5 minutes
- Image size: ~30MB
- Cold start: <1 second
- Memory usage: ~50MB
- Page load: <500ms

## 🐛 Troubleshooting

### Build fails
Check `package.json` scripts and dependencies

### Health check fails
Ensure `/api/health` endpoint is accessible

### Static export issues
Verify `next.config.js` has `output: 'export'`

### nginx not serving
Check nginx.conf syntax and file permissions

## 📝 License

This is a demo application for internal use.

## 🤝 Support

For issues or questions:
- Platform Team: chandrashekhar@appointy.com
- Backstage Issues: Check platform-backstage repository
