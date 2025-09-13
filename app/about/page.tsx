import CoolNavigation from "@/components/cool-navigation"
import  CoolAboutHero  from "@/components/cool-about-hero"
import CoolSkillsSection from "@/components/cool-skills-section"
import CoolExperienceSection from "@/components/cool-experience-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <CoolNavigation />
      <div className="pt-16">
        <CoolAboutHero />
        <CoolSkillsSection />
        <CoolExperienceSection />
      </div>
    </main>
  )
}
