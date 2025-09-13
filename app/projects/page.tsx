import CoolNavigation from "@/components/cool-navigation"
import { ProjectsGrid } from "@/components/projects-grid"
import { Button } from "@/components/ui/button"
import { Github, Terminal, Code, Zap } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <CoolNavigation />
      <div className="pt-16">
        {/* Header Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-primary font-mono text-xs code-scroll"
                style={{
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                }}
              >
                {["function()", "const x =", "=> {}", "import", "export", "async"][Math.floor(Math.random() * 6)]}
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Terminal className="w-8 h-8 text-primary animate-pulse" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance font-mono">
                  <span className="text-primary">$</span> ls <span className="text-secondary">projects/</span>
                </h1>
                <Code className="w-8 h-8 text-secondary animate-pulse" />
              </div>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance font-mono">
                <span className="text-primary"># </span>
                Cool stuff I've built during my coding journey 🚀<br />
                <span className="text-primary"># </span>
                From Roblox scripts to web apps - here's my digital playground!
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="glitch-effect font-mono" asChild>
                  <Link href="https://github.com/elias4044" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    elias4044/repos
                  </Link>
                </Button>
              </div>

              <div className="mt-12 bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-primary">elias@portfolio:~/projects$</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-muted-foreground">total_projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">5</div>
                    <div className="text-muted-foreground">languages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-muted-foreground">bugs_fixed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">24/7</div>
                    <div className="text-muted-foreground">coding_mode</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsGrid />
          </div>
        </section>
      </div>
    </main>
  )
}
