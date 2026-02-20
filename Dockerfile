# Stage 1: Build Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --prefer-offline --no-audit --progress=false

# Copy application code
COPY . .

# Build Next.js application (static export)
RUN npm run build

# Stage 2: Compress static assets
FROM alpine:latest AS compressor

WORKDIR /app/build

# Copy built files from builder stage
COPY --from=builder /app/out ./

# Install gzip and compress all files
RUN apk add --no-cache findutils gzip && \
    find . -type f -exec gzip -k {} \;

# Stage 3: Serve with nginx
FROM nginx:alpine

# Copy compressed static files
COPY --from=compressor /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
