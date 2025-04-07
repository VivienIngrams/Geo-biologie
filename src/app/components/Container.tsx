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

      <main className="w-full ">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
