"use client"

import React, { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "about", href: "#aboutus" },
  { name: "projects", href: "#projects" },
  { name: "skills", href: "#skills" },
  { name: "experience", href: "#experience" },
  { name: "contact", href: "#contacts" },
]

type Theme = "dark" | "light" | "system"

const Navbar = () => {
  const [theme, setTheme] = useState<Theme>("dark")

  const resolvedTheme: "dark" | "light" =
    theme === "system"
      ? (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme

  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
      root.classList.remove("light")
    } else if (theme === "light") {
      root.classList.remove("dark")
      root.classList.add("light")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      root.classList.toggle("dark", prefersDark)
      root.classList.toggle("light", !prefersDark)
    }
  }, [theme])

  const themeButtons: { mode: Theme; icon: React.ReactNode; label: string }[] = [
    { mode: "system", icon: <Monitor size={13} />, label: "System" },
    { mode: "light", icon: <Sun size={13} />, label: "Light" },
    { mode: "dark", icon: <Moon size={13} />, label: "Dark" },
  ]

  return (
    <nav className={cn("fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[100vw] md:max-w-[750px] backdrop-blur-md h-20 z-40")}>
      <div className="px-6 h-full flex items-center justify-between">

        <ul className="flex items-center gap-5 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-widest no-underline transition-colors"
                style={{ color: isDark ? "#666" : "#999" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = isDark ? "#e8e8e8" : "#111" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#666" : "#999" }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="flex items-center rounded-lg overflow-hidden"
          style={{ border: isDark ? "1px solid #2a2a2a" : "1px solid #e0e0e0" }}
        >
          {themeButtons.map(({ mode, icon, label }) => (
            <button
              key={mode}
              onClick={() => setTheme(mode)}
              aria-label={label}
              title={label}
              className="w-8 h-8 flex items-center justify-center transition-colors cursor-pointer border-none"
              style={{
                background: theme === mode
                  ? isDark ? "#1e1e1e" : "#f0f0f0"
                  : "transparent",
                color: theme === mode
                  ? isDark ? "#e8e8e8" : "#111"
                  : isDark ? "#555" : "#aaa",
              }}
            >
              {icon}
            </button>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default Navbar