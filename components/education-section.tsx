import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    year: "2015 - 2019",
    gpa: "3.8/4.0",
    description: "Focused on software engineering, algorithms, and web development. Graduated Magna Cum Laude.",
  },
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2022",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2021",
  },
]

export function EducationSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that keep me at the forefront of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.year} • GPA: {edu.gpa}
                  </p>
                  <p className="text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <BookOpen className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.year}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
