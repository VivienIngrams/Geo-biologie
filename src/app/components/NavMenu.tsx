'use client'

'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '../components/ui/button'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'La Géobiologie', href: '/geobiologie' },
  { label: 'Mes Services', href: '/services' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full  bg-secondary">
      <div className="container flex h-16 items-center justify-between md:max-w-[90vw] mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/icon.png"
              width={60}
              height={60}
              alt="Géobiologie"
              className="overflow-hidden h-10 w-10 border-primary/30 border-[1px] ml-2 object-cover max-w-full"
            />
            <span className="text-primary font-spectral font-medium tracking-tighter text-xl">Le Chemin du Vivant</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-base tracking-wide font-medium transition-colors text-primary hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          
          className="mr-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Menu</span>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="text-primary h-6 w-6" />}
        </div>
      </div>

      {isOpen && (
        <div className="container md:hidden border-b border-primary">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-base font-medium transition-colors text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
