import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'User Info App',
  description: 'An app to display user system information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('Rendering RootLayout');
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}