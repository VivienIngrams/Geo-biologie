import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Quicksand,Spectral} from 'next/font/google'

import Container from './components/Container'

const spectral = Spectral({
  variable: '--font-family-spectral',
  weight: ['400', '500', '600',  '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const quicksand = Quicksand({
  variable: '--font-family-quicksand',
  weight: ['400', '700'],
  style: ['normal'],
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
    <html className={` ${spectral.variable} ${quicksand.variable}`} lang="fr">
      <body className="h-full bg-secondary font-quicksand">
        <Container>
          {children}
          <Analytics />
        </Container>
      </body>
    </html>
  )
}
