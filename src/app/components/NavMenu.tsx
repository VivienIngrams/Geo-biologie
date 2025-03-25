'use client'


"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "../components/ui/button"

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "La Géobiologie", href: "/geobiologie" },
  { label: "Mes Services", href: "/services" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
]

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-xl">Le Chemin du Vivant</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Menu</span>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
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

