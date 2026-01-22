import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Para mi amor 💕',
  description: 'Un sitio especial hecho con amor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
