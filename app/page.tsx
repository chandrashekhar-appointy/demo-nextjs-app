export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">v1.0.0 - Build: SHORT_SHA</div>
        <h1>Welcome to Demo Next.js App</h1>
        <p>
          This is a demo application created to test the Backstage Platform template
          for Next.js applications with GCS + nginx deployment.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>🚀 Fast Deployment</h3>
          <p>
            Automated CI/CD pipeline with Cloud Build, uploading to GCS,
            and deploying via ArgoCD.
          </p>
        </div>

        <div className="card">
          <h3>📦 Lightweight</h3>
          <p>
            nginx-based deployment with pre-compressed static files
            for optimal performance.
          </p>
        </div>

        <div className="card">
          <h3>☁️ GCS Backup</h3>
          <p>
            All build artifacts stored in Google Cloud Storage
            for easy rollback and audit.
          </p>
        </div>
      </div>

      <div className="content" style={{ marginTop: '3rem' }}>
        <h2>Features</h2>
        <ul>
          <li>Next.js 14 with App Router</li>
          <li>TypeScript support</li>
          <li>Static site generation</li>
          <li>Responsive design</li>
          <li>Production-ready configuration</li>
          <li>Health check endpoint</li>
        </ul>
      </div>
    </div>
  )
}
