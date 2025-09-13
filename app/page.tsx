import CoolNavigation from "@/components/cool-navigation"
import TerminalHero from "@/components/terminal-hero"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <CoolNavigation />
      <TerminalHero />
    </PageTransition>
  )
}
