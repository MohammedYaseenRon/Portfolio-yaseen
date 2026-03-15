"use client"

import { Menu, X } from "lucide-react"
import React, { useState } from "react"

const navLinks = [
  { name: "about", href: "#aboutus" },
  { name: "projects", href: "#projects" },
  { name: "skills", href: "#skills" },
  { name: "experience", href: "#experience" },
  { name: "contact", href: "#contacts" },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[750px] backdrop-blur-sm h-20 z-40">
        <div className="px-6 py-2 md:py-8 flex items-center justify-between gap-6">
            <span className="font-mono text-sm font-extrabold tracking-tight text-white">
              yaseen<span className="text-[#06D6A0]">.dev</span>
            </span>

            <ul className="flex items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-mono text-xs text-[#666] tracking-widest no-underline transition-colors hover:text-[#e8e8e8]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar