'use client'

import Link from 'next/link'
import NavMenu from './NavMenu'

export default function Footer() {
  return (
    <footer
      className={`fixed bottom-0 w-full md:h-8 p-4 pt-4 md:pb-7 flex items-end md:items-center justify-between`}
    >
      {/* Website Link */}
      <div className="relative z-60">
        <Link
          href="https://vivieningrams.com"
          target="_blank"
          rel="noopener noreferrer"
          className={` font-arsenal text-gray-500 hover:text-black tracking-normal leading-loose text-[12px] ml-12 md:ml-2 mb-1`}
        >
          Site web par Vivien Ingrams
        </Link>
      </div>

      <NavMenu />
    </footer>
  )
}
