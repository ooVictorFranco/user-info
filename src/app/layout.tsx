import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'User Info App',
  description: 'An app to display user system information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://api.ipify.org https://ipapi.co;" />
      </head>
      <body>{children}</body>
    </html>
  )
}