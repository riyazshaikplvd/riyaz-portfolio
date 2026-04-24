"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Shield, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Cyber Labs", href: "#cyber-labs" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-slate-950/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
        : "bg-transparent"
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <Shield className="h-9 w-9 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 bg-cyan-400/30 blur-xl group-hover:bg-cyan-400/50 transition-all" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">
              Riyaz Shaik
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-[15px] font-semibold px-4 py-2.5 rounded-xl
                  text-slate-300 
                  hover:text-white
                  hover:bg-cyan-400/10
                  hover:shadow-md hover:shadow-cyan-400/20
                  transition-all duration-300
                  hover:scale-105
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* RESUME BUTTON */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="lg"
              className="
                bg-gradient-to-r from-cyan-500 to-blue-500 
                hover:from-cyan-400 hover:to-blue-400 
                text-slate-950 font-bold 
                shadow-lg shadow-cyan-500/30
                hover:scale-105 transition-all duration-300
                px-5 py-2.5 rounded-xl
              "
              asChild
            >
              <a
                href="/RIYAZ-SOC-L1.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>

        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800 bg-slate-950/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    text-base font-semibold 
                    text-slate-300 
                    hover:text-white 
                    px-4 py-3 rounded-xl 
                    hover:bg-cyan-400/10 
                    transition-all
                  "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-4 pt-4 border-t border-slate-800 mt-2">
                <Button
                  size="lg"
                  className="
                    w-full 
                    bg-gradient-to-r from-cyan-500 to-blue-500 
                    hover:from-cyan-400 hover:to-blue-400 
                    text-slate-950 font-bold
                  "
                  asChild
                >
                  <a
                    href="/RIYAZ-SOC-L1.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

            </div>
          </div>
        )}

      </nav>
    </header>
  )
}
