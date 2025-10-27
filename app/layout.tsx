import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sportsbet - Online Sports Betting',
  description: 'Australia\'s favourite online betting and entertainment website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">{children}</body>
    </html>
  )
}
