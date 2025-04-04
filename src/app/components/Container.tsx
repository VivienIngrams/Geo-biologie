'use client'

import NavMenu from '../components/NavMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


import Footer from './Footer'

export default function Container({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  const isHomePage = path === '/'
  const isContactPage = path === '/contact'

  return (
    <div className="max-w-screen h-full">
     <NavMenu />

      <main className="w-full  px-auto px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-40">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
