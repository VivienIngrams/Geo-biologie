import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Quicksand} from 'next/font/google'

import Container from './components/Container'

const quicksand = Quicksand({
  variable: '--font-family-quicksand',
  weight: ['400'],
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
    <html className={` ${quicksand.variable} `}>
      <body className="h-full mx-2 font-quicksand">
        <Container>
          {children}
          <Analytics />
        </Container>
      </body>
    </html>
  )
}
