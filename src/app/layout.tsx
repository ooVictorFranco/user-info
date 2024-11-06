import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}