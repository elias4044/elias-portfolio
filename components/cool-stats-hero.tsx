  "use client"

  import { useState, useEffect } from "react"
  import { BarChart3, Terminal, TrendingUp, Zap, DollarSign, FolderGit2, Bed } from "lucide-react"

  export default function CoolStatsHero() {
    const [liveStats, setLiveStats] = useState({
      linesOfCode: 12847,
      projectsStarted: 72,
      bugsFixed: 342,
      moneyEarned: 0.1,
    })

    useEffect(() => {
      const interval = setInterval(() => {
        setLiveStats((prev) => ({
          ...prev,
          linesOfCode: prev.linesOfCode + Math.floor(Math.random() * 3),
          projectsStarted: prev.projectsStarted + (Math.random() > 0.8 ? 1 : 0),
        }))
      }, 2000)
      return () => clearInterval(interval)
    }, [])

    return (
      <section className="py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 25 }).map((_, i) => (
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
              {["++", "--", "+=", "==", "!=", "&&", "||", "=>"][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Terminal className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold font-mono">
                <span className="text-primary">$</span> stats <span className="text-secondary">--live</span>
              </h1>
              <BarChart3 className="w-8 h-8 text-secondary animate-pulse" />
            </div>

            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              <span className="text-primary"># </span>
              Real-time stats from my coding journey 📊<br />
              <span className="text-primary"># </span>
              These numbers keep growing (especially the bugs) 🐛
            </p>
          </div>

          {/* Live stats terminal */}
          <div className="bg-card border border-border rounded-lg shadow-2xl mb-12 overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal className="w-4 h-4" />
                <span className="text-sm font-mono">elias@stats:~$</span>
              </div>
            </div>
            <div className="p-6 font-mono">
              <div className="text-primary mb-2">$ watch -n 1 'cat /dev/elias/stats'</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">lines_of_code</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{liveStats.linesOfCode.toLocaleString()}</div>
                  <div className="text-xs text-secondary">+3 per commit</div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <FolderGit2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-muted-foreground">projects_started</span>
                  </div>
                  <div className="text-2xl font-bold text-secondary">{liveStats.projectsStarted}</div>
                  <div className="text-xs text-primary">and about 10% of them completed</div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">bugs_fixed</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{liveStats.bugsFixed}</div>
                  <div className="text-xs text-secondary">still counting...</div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-muted-foreground">money_earned</span>
                  </div>
                  <div className="text-2xl font-bold text-secondary">${liveStats.moneyEarned}</div>
                  <div className="text-xs text-primary">I contribute and create code, not money.</div>
                </div>
              </div>  

              <div className="mt-4 text-primary">
                $ echo "Stats updating in real-time..."
                <span className="terminal-cursor">|</span>
              </div>
            </div>
          </div>

          {/* Quick overview cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="font-mono font-semibold">Growth Rate</h3>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">📈 Exponential</div>
              <p className="text-sm text-muted-foreground">Learning new stuff every day!</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-secondary" />
                <h3 className="font-mono font-semibold">Coding Speed</h3>
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">⚡ Fast</div>
              <p className="text-sm text-muted-foreground">Especially at 2 AM</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <Bed className="w-6 h-6 text-primary" />
                <h3 className="font-mono font-semibold">Fuel Level</h3>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">💤 Medium</div>
              <p className="text-sm text-muted-foreground">Powered by sleep</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
