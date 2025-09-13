"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Terminal, Code, Gamepad2, Bed, Zap, Github } from "lucide-react"

export default function CoolAboutHero() {
  const [currentFact, setCurrentFact] = useState(0)

  const funFacts = [
    "Started coding at 12 with Roblox Lua 🎮",
    "Built my first Python bot at 13 🐍",
    "Codes better at 2 AM 🌙",
    "Dreams in JavaScript 💭",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrix-rain ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {["def", "class", "import", "function", "const", "let", "var", "async"][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-muted px-4 py-2 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm font-mono">elias@about:~$</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="text-primary">$ cat personal_info.json</div>
                <div className="text-foreground ml-4">
                  <div>{"{"}</div>
                  <div className="ml-4">"name": "Elias",</div>
                  <div className="ml-4">"age": 14,</div>
                  <div className="ml-4">"location": "Earth 🌍",</div>
                  <div className="ml-4">"status": "Student & Developer",</div>
                  <div className="ml-4">"passion": ["Coding", "Gaming", "Learning"],</div>
                  <div className="ml-4">"current_mood": "Excited to code! 🚀",</div>
                  <div className="ml-4">
                    "fun_fact": "<span className="text-secondary">{funFacts[currentFact]}</span>"
                  </div>
                  <div>{"}"}</div>
                </div>
                <div className="text-primary mt-4">$ echo "Always learning, always building!"</div>
                <div className="text-secondary">Always learning, always building!</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold font-mono">
                  <span className="text-primary">About</span> Me
                </h1>
              </div>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Hey! I'm Elias, a 14-year-old developer who fell in love with coding through
                  <span className="text-primary font-semibold"> Roblox game development</span>. What started as making
                  cool games turned into a passion for building awesome stuff!
                </p>

                <p>
                  My journey: <span className="text-secondary font-semibold">Roblox Lua</span> →
                  <span className="text-primary font-semibold"> Python</span> →
                  <span className="text-secondary font-semibold"> Web Development</span>. Now I'm exploring the endless
                  possibilities of the web! 🌐
                </p>

                <p>
                  When I'm not coding, you'll find me gaming, learning new technologies, or probably debugging something
                  at 2 AM (the best coding hours, obviously).
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Gamepad2, label: "Started with", value: "Roblox" },
                { icon: Bed, label: "Fuel", value: "Sleep" },
                { icon: Zap, label: "Best time", value: "2 AM" },
                { icon: Github, label: "Username", value: "@elias4044" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:scale-105 transition-all duration-200"
                >
                  <item.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glitch-effect">
                <Github className="w-5 h-5 mr-2" />
                Check My GitHub
              </Button>
              <Button variant="outline" size="lg" className="glitch-effect bg-transparent">
                <Terminal className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
