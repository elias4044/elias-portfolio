import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">Full-Stack Developer & UI/UX Enthusiast</p>
            </div>

            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                make a difference. I specialize in modern web technologies and love turning complex problems into
                simple, beautiful designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community through blog posts and mentoring.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences that are both functional and
                delightful. My goal is to bridge the gap between technical excellence and user satisfaction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center">
            <Card className="p-8 max-w-sm w-full">
              <div className="text-center space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src="/professional-developer-headshot.png"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Your Name</h3>
                  <p className="text-muted-foreground">Full-Stack Developer</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>5+ Years Experience</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    "Code is like humor. When you have to explain it, it's bad."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
