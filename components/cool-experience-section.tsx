"use client"

import { Calendar, MapPin, Code, Gamepad2, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Open Source Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2025 - Present",
    type: "Open Source",
    description: "Building cool websites and web apps for anyone to use.",
    achievements: [
      "Contributed to others projects",
      "Learnt React, Next.js, React Native and Node.js. Also a lot about git/github.",
      "Mastered UI/UX, and designing.",
    ],
    tech: ["React", "Next.js", "Tailwind", "TypeScript"],
    icon: Code,
    color: "text-primary",
  },
  {
    title: "Roblox Game Developer",
    company: "Roblox Platform",
    location: "Online",
    period: "2022 - 2024",
    type: "Game Dev",
    description: "Started my coding journey creating games and scripts in Roblox Studio. This is where it all began!",
    achievements: [
      "Created 10+ game experiences",
      "Learned Lua programming",
      "Built game mechanics & UI",
      "Collaborated with other devs",
    ],
    tech: ["Lua", "Roblox Studio", "Game Design", "UI/UX"],
    icon: Gamepad2,
    color: "text-secondary",
  },
]

export default function CoolExperienceSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> git log --experience
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-primary"># </span>
            My coding journey so far - from games to web dev!
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and basic info */}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${exp.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold font-mono">{exp.title}</h3>
                        <Badge variant="outline" className="font-mono">
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="text-lg font-semibold text-primary mb-2">{exp.company}</div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-2 font-mono text-primary">Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <span className="text-primary">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <h4 className="font-semibold mb-2 font-mono text-primary">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="font-mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Money earned highlight */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <DollarSign className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold font-mono">Total Money Earned</h3>
          </div>
          <div className="text-4xl font-bold text-primary font-mono mb-2">$0.1+</div>
          <p className="text-muted-foreground font-mono">
            <span className="text-primary"># </span>
            I'm poor, I know. But everyone starts somewhere, right?
          </p>
        </div>
      </div>
    </section>
  )
}
