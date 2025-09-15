import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, Github, Twitter } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send me an email anytime",
    value: "elias4044@proton.me",
    href: "mailto:elias4044@proton.me",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in",
    value: "Halmstad, Sweden",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "I typically respond within",
    value: "24 hours",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/elias4044",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/elias4044_",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground leading-relaxed">
          I'm always interested in new opportunities and exciting projects. Whether you have a specific project in mind
          or just want to connect, feel free to reach out through any of the methods below.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method) => (
          <Card key={method.title} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <method.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                  {method.href ? (
                    <Link href={method.href} className="text-sm font-medium text-primary hover:underline">
                      {method.value}
                    </Link>
                  ) : (
                    <p className="text-sm font-medium">{method.value}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Social Links */}
      <Card>
        <CardHeader>
          <CardTitle>Connect With Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Button key={social.label} variant="outline" size="sm" asChild>
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-4 w-4 mr-2" />
                  {social.label}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Availability */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-semibold text-primary">Available for Work</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I'm currently available for freelance projects and full-time opportunities. Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
