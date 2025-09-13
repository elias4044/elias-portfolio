import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${featured ? "lg:col-span-1" : ""}`}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
          <Link href={project.githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild className="flex-1">
          <Link href={project.liveUrl} target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
