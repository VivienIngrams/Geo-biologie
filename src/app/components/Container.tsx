'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import BackButton from './BackButton'
import Footer from './Footer'

export default function Container({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  const isHomePage = path === '/'
  const isContactPage = path === '/contact'

  return (
    <div className="max-w-screen h-full font-ubuntu">
      <div
        className={`${
          isHomePage
            ? 'hidden'
            : 'fixed  top-0 z-50 h-24 w-full md:h-24 bg-white flex flex-col items-center justify-center'
        }`}
      >
        <BackButton show={!isHomePage} href="/posts" />
        <BackButton show={!isHomePage} href="/posts/collaborations" />
        <BackButton show={!isHomePage} href="/" />
        <BackButton show={!isHomePage} href="/" />
      </div>

      <main className="w-full ">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
