export default function About() {
  return (
    <div className="container">
      <div className="content">
        <h2>About This Demo</h2>
        <p>
          This demo application was created to test and showcase the Backstage Platform 
          template for Next.js applications. It demonstrates the complete workflow from 
          development to production deployment.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Deployment Architecture</h2>
        <p>
          The application uses a modern deployment pattern:
        </p>
        <ul>
          <li>Build: Next.js static site generation</li>
          <li>Storage: Google Cloud Storage for asset backup</li>
          <li>Container: nginx-based lightweight image</li>
          <li>Orchestration: Kubernetes via ArgoCD</li>
          <li>CI/CD: Google Cloud Build</li>
        </ul>

        <h2 style={{ marginTop: '2rem' }}>Tech Stack</h2>
        <ul>
          <li>Framework: Next.js 14</li>
          <li>Language: TypeScript</li>
          <li>Styling: CSS</li>
          <li>Deployment: nginx + GCS</li>
          <li>Platform: Backstage</li>
        </ul>

        <h2 style={{ marginTop: '2rem' }}>Benefits</h2>
        <p>
          This deployment pattern provides several advantages:
        </p>
        <ul>
          <li>Fast builds and deployments</li>
          <li>Small container images (~30MB)</li>
          <li>Low resource usage</li>
          <li>Easy rollbacks via GCS</li>
          <li>CDN-ready static assets</li>
          <li>Production-grade security</li>
        </ul>
      </div>
    </div>
  )
}
