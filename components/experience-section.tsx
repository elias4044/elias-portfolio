import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Improved application performance by 40% through optimization.",
    technologies: ["Vue.js", "Python", "MongoDB", "Redis", "Vercel"],
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2019 - 2020",
    description:
      "Built responsive user interfaces and collaborated with design team to implement pixel-perfect designs. Reduced load times by 60%.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Jest"],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
