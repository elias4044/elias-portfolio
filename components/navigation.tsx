"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Mail } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/stats", label: "Stats" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 ${
                  pathname === item.href ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-border/50">
              <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button size="sm" asChild className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <Link href="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-primary/10 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-card/50 backdrop-blur-sm border-t border-border/50 rounded-b-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "text-primary bg-primary/10 border-l-2 border-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-center space-x-3 px-4 py-3 mt-4 border-t border-border/50">
              <Button variant="ghost" size="sm" asChild className="flex-1 hover:bg-primary/10">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button size="sm" asChild className="flex-1 shadow-sm">
                <Link href="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
