"use client"

import React from "react"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Terminal, Code, Gamepad2 } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "JavaScript/TypeScript", level: 85, color: "text-yellow-500" },
      { name: "Python", level: 80, color: "text-blue-500" },
      { name: "Lua (Roblox)", level: 90, color: "text-purple-500" },
      { name: "HTML/CSS", level: 85, color: "text-orange-500" },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Terminal,
    skills: [
      { name: "React/Next.js", level: 80, color: "text-cyan-500" },
      { name: "Node.js", level: 75, color: "text-green-500" },
      { name: "Tailwind CSS", level: 90, color: "text-teal-500" },
      { name: "Git/GitHub", level: 85, color: "text-gray-500" },
    ],
  },
  {
    title: "Game Dev",
    icon: Gamepad2,
    skills: [
      { name: "Roblox Studio", level: 95, color: "text-red-500" },
      { name: "Game Logic", level: 85, color: "text-purple-500" },
      { name: "UI/UX Design", level: 70, color: "text-pink-500" },
      { name: "Scripting", level: 90, color: "text-indigo-500" },
    ],
  },
]

export default function CoolSkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> skills --list
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-primary"># </span>
            Technologies I've learned during my coding journey
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono transition-all duration-200 ${
                  activeCategory === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:bg-muted"
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.title}
              </button>
            )
          })}
        </div>

        {/* Skills display */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            {React.createElement(skillCategories[activeCategory].icon, {
              className: "w-6 h-6 text-primary",
            })}
            <h3 className="text-2xl font-bold font-mono">{skillCategories[activeCategory].title}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-semibold">{skill.name}</span>
                  <Badge variant="outline" className="font-mono">
                    {skill.level}%
                  </Badge>
                </div>
                <Progress value={skill.level} className="h-3" />
                <div className="text-sm text-muted-foreground font-mono">
                  <span className="text-primary">// </span>
                  {skill.level >= 90
                    ? "Expert level"
                    : skill.level >= 80
                      ? "Advanced"
                      : skill.level >= 70
                        ? "Intermediate"
                        : "Learning"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun coding stats */}
        <div className="mt-12 bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-lg font-semibold">Coding Stats</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-muted-foreground">years_coding</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">5</div>
              <div className="text-muted-foreground">languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-muted-foreground">bugs_created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">∞-1</div>
              <div className="text-muted-foreground">bugs_fixed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
