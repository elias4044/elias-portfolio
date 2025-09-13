"use client"

import { Trophy, Star, Zap, Target, Gift, Gamepad2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    title: "First Hello World",
    description: "Wrote my first 'Hello World' in Roblox Lua",
    date: "2022",
    icon: Gamepad2,
    color: "text-purple-500",
    rarity: "Common",
  },
  {
    title: "Python Master",
    description: "Built my first Python bot and automation scripts",
    date: "2023",
    icon: Star,
    color: "text-blue-500",
    rarity: "Rare",
  },
  {
    title: "Web Developer",
    description: "Created my first React website",
    date: "2024",
    icon: Zap,
    color: "text-cyan-500",
    rarity: "Epic",
  },
  {
    title: "NPM Lover",
    description: "Create your first NPM package and publish it",
    date: "2025",
    icon: Target,
    color: "text-red-400",
    rarity: "Legendary",
  },
  {
    title: "Bug Hunter",
    description: "Fixed 100+ bugs (and created 200+ more)",
    date: "2024",
    icon: Trophy,
    color: "text-yellow-500",
    rarity: "Epic",
  },
  {
    title: "Go-langer",
    description: "Program your first project inside Golang (Go).",
    date: "2025",
    icon: Gift,
    color: "text-orange-500",
    rarity: "Epic",
  },
]

const rarityColors = {
  Common: "bg-gray-500/20 text-gray-500 border-gray-500/30",
  Rare: "bg-blue-500/20 text-blue-500 border-blue-500/30",
  Epic: "bg-purple-500/20 text-purple-500 border-purple-500/30",
  Legendary: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
  Mythical: "bg-pink-500/20 text-pink-500 border-pink-500/30",
}

export default function CoolAchievementsSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> achievements --unlock
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-primary"># </span>
            Milestones unlocked during my coding adventure 🏆
          </p>
        </div>

        {/* Achievement stats */}
        <div className="bg-card border border-border rounded-lg p-6 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="font-mono text-lg font-semibold">Achievement Progress</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-mono text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{achievements.length}</div>
              <div className="text-muted-foreground">total_unlocked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">0</div>
              <div className="text-muted-foreground">mythical</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1</div>
              <div className="text-muted-foreground">legendary</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">3</div>
              <div className="text-muted-foreground">epic</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-muted-foreground">more_to_come</div>
            </div>
          </div>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-muted ${achievement.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`font-mono text-xs ${rarityColors[achievement.rarity as keyof typeof rarityColors]}`}
                  >
                    {achievement.rarity}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold font-mono mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">Unlocked: {achievement.date}</span>
                  <div className="text-primary">✨</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Next achievements preview */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold font-mono mb-4">Coming Soon...</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-mono">
            <div className="opacity-60">
              <div className="text-lg">🎯 First $10</div>
              <div className="text-muted-foreground">Earn $10 from projects</div>
            </div>
            <div className="opacity-60">
              <div className="text-lg">🚀 Open Source Hero</div>
              <div className="text-muted-foreground">Contribute to 10 repos</div>
            </div>
            <div className="opacity-60">
              <div className="text-lg">🎓 High School Coder</div>
              <div className="text-muted-foreground">Start computer science in high school</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
