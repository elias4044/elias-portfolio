import { ProjectCard } from "./project-card"

const projects = [
  {
    id: 1,
    title: "Schoolsoft+",
    description: "A full-stack alternative to Schoolsoft, a Swedish school management system.",
    image: "/projects/schoolsoftplus_preview.png",
    technologies: ["HTML", "JS", "CSS", "Vercel", "Firebase"],
    githubUrl: "https://github.com/elias4044/schoolsoft-plus",
    liveUrl: "https://schoolsoftplus.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "This Portfolio",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS, to easily let people know who I am.",
    image: "/projects/portfolio-website.png",
    technologies: ["NextJS", "Vercel", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/elias4044/elias-portfolio",
    liveUrl: "https://elias4044.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Launch Menu",
    description: "A one-click tool to spin up your apps and servers. Support for both web app and desktop app. Self-hosted.",
    image: "https://github.com/elias4044/LaunchMenu/raw/main/img/preview.png",
    technologies: ["Node.js", "Electron", "HTML", "CSS"],
    githubUrl: "https://github.com/elias4044/LaunchMenu",
    liveUrl: "https://github.com/elias4044/LaunchMenu",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "A modern, customizable portfolio website generator. Instantly create a beautiful, interactive HTML/CSS/JS portfolio with your own projects and contact info—no coding required!",
    image: "/projects/portfolio_gen_preview.png",
    technologies: ["NodeJS", "NPM", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/elias4044/portfolio-template",
    liveUrl: "https://.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "NutriTrack",
    description: "A app built in React Native to help you track total calories eaten. My first React Native project!",
    image: "https://github.com/elias4044/NutriTrack/blob/master/assets/icon.png?raw=true&s=100",
    technologies: ["React Native", "Expo"],
    githubUrl: "https://github.com/elias4044/NutriTrack",
    liveUrl: "https://github.com/elias4044/NutriTrack",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern design principles.",
    image: "/projects/portfolio_preview.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio-demo.vercel.app",
    featured: false,
  },
]

export function ProjectsGrid() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="space-y-16">
      {/* Featured Projects */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
