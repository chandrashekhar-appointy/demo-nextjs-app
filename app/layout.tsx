import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Demo Next.js App',
  description: 'Testing Backstage Platform Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-container">
            <h1 className="logo">Demo App</h1>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>
        <main className="main">
          {children}
        </main>
        <footer className="footer">
          <p>© 2024 Demo Next.js App - Built with Backstage Platform</p>
        </footer>
      </body>
    </html>
  )
}
