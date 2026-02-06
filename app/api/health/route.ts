import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'demo-nextjs-app',
    version: process.env.BUILD_VERSION || 'dev'
  })
}
