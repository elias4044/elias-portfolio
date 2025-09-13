"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Terminal, Code, Gamepad2 } from "lucide-react"
import Link from "next/link"

const codeLines = [
  "const developer = 'Elias';",
  "let age = 14;",
  "const experience = '2 years';",
  "const journey = ['Roblox', 'Python', 'Web'];",
  "console.log('Hello, World!');",
  "function createAwesome() {",
  "  return 'Building cool stuff!';",
  "}",
  "// Started with game dev",
  "// Now conquering the web",
]

export default function TerminalHero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isTyping) return

    const currentLine = codeLines[currentLineIndex]
    if (displayedText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1))
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        if (currentLineIndex < codeLines.length - 1) {
          setCurrentLineIndex(currentLineIndex + 1)
          setDisplayedText("")
        } else {
          setIsTyping(false)
        }
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [displayedText, currentLineIndex, isTyping])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono text-sm matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal window */}
          <div className="bg-card border border-border rounded-lg shadow-2xl mb-8 overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal className="w-4 h-4" />
                <span className="text-sm font-mono">elias@portfolio:~$</span>
              </div>
            </div>
            <div className="p-6 font-mono text-left bg-card min-h-[200px]">
              <div className="text-primary mb-2">$ whoami</div>
              <div className="text-foreground mb-4">elias4044</div>
              <div className="text-primary mb-2">$ cat about.txt</div>
              <div className="text-foreground space-y-1">
                <div>Name: Elias</div>
                <div>Age: 14</div>
                <div>Experience: ~2 years</div>
                <div>Journey: Roblox → Python → Web</div>
                <div>Status: Building awesome stuff</div>
              </div>
              <div className="text-primary mt-4 mb-2">$ vim current_project.js</div>
              <div className="text-foreground">
                {displayedText}
                <span className="terminal-cursor">|</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Code className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hey, I'm Elias!
              </h1>
              <Gamepad2 className="w-8 h-8 text-secondary" />
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              14-year-old developer who started with <span className="text-primary font-semibold">Roblox game dev</span>
              , moved to <span className="text-secondary font-semibold">Python</span>, and now I'm conquering the
              <span className="text-primary font-semibold"> web</span>! 🚀
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link href="https://github.com/elias4044">              <Button size="lg" className="glitch-effect">
                <Code className="w-5 h-5 mr-2" />
                View My Code
              </Button></Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="glitch-effect bg-transparent">
                  <Terminal className="w-5 h-5 mr-2" />
                  See Projects
                </Button></Link>
            </div>

            {/* Stats preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto pb-4">
              {[
                { label: "Years Coding", value: "2+" },
                { label: "Projects Built", value: "15+" },
                { label: "Money Earned", value: "$0.1" },
                { label: "Coffee Consumed", value: "10" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:scale-105 transition-transform"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
