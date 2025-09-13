import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/elias4044", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/elias4044_", label: "Twitter" },
    { icon: Mail, href: "mailto:elias4044@proton.me", label: "Email" },
  ]

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/stats", label: "Stats" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Elias's Portfolio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full-stack developer passionate about creating digital solutions that make a difference.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-primary/10 transition-colors duration-200"
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Halmstad, Sweden</p>
              <p>elias4044@proton.me</p>
              <p>Available for questions, or/and collaborations</p>
            </div>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Let's Work Together
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">© {currentYear} Elias. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Elias using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
