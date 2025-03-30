import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Spectral} from 'next/font/google'

import Container from './components/Container'

const spectral = Spectral({
  variable: '--font-family-spectral',
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Joëlle Villegas',
  description: 'Géo-biologue',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={` ${spectral.variable} `}>
      <body className="h-full mx-2 font-spectral">
        <Container>
          {children}
          <Analytics />
        </Container>
      </body>
    </html>
  )
}
