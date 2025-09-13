import CoolNavigation from "@/components/cool-navigation"
import CoolStatsHero from "@/components/cool-stats-hero"
import { GitHubStats } from "@/components/github-stats"
import { CodingStats } from "@/components/coding-stats"
import CoolAchievementsSection from "@/components/cool-achievements-section"

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <CoolNavigation />
      <div className="pt-16">
        <CoolStatsHero />
        <GitHubStats />
        <CodingStats />
        <CoolAchievementsSection />
      </div>
    </main>
  )
}
