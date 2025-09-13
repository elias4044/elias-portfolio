import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance leading-tight">
              <span className="text-foreground">Hi, I'm a</span>{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent animate-pulse">
                Developer
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              I create beautiful, functional, and user-friendly web applications using modern technologies and best
              practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto hover:bg-primary/5 transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 pt-8">
            {[
              {
                icon: Code,
                title: "Clean Code",
                description:
                  "Writing maintainable, scalable, and well-documented code following industry best practices.",
              },
              {
                icon: Palette,
                title: "Modern Design",
                description:
                  "Creating beautiful, responsive interfaces with attention to user experience and accessibility.",
              },
              {
                icon: Zap,
                title: "Performance",
                description:
                  "Optimizing applications for speed, efficiency, and excellent user experience across all devices.",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
