"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Github, Code, ExternalLink, Music, Dumbbell, Users } from "lucide-react"
import Image from "next/image"

interface AccentClassConfig {
  hover: string
  bg: string
  icon: string
  border: string
}

interface AccentClasses {
  [key: string]: AccentClassConfig
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      id: 1,
      title: "Talents Tracks",
      description:
        "TalentTrack is a full-stack job portal that enables recruiters to post jobs, schedule interviews, receive applications, and efficiently manage applicant details.",
      imageUrl: "/talent.png",
      technologies: ["Next.js", "Node.js", "Typescript", "Postgres", "Prisma", "Zustand", "Tailwind CSS"],
      githubUrl: "https://github.com/MohammedYaseenRon/TalentTrack",
      liveUrl: "https://talent-track-liard.vercel.app/",
      icon: <Music className="w-6 h-6 text-purple-500" />,
      accentColor: "purple",
    },
    {
      id: 2,
      title: "Fitness Web Application",
      description: "Personalized workout plans, nutrition tracking, and progress monitoring for fitness enthusiasts.",
      imageUrl: "/fit4you.png",
      technologies: ["Next.js", "Typescript", "Postgres", "MediaPipe", "Gemini llm", "Tailwind CSS", "ReChart"],
      githubUrl: "https://github.com/MohammedYaseenRon/fitness-trakcer-app.git",
      liveUrl: "https://fitness-app.example.com",
      icon: <Dumbbell className="w-6 h-6 text-blue-500" />,
      accentColor: "blue",
    },
    {
      id: 3,
      title: "Recruiter Hire Candidate",
      description: "Match candidates to job roles by scanning resumes based on skills and job descriptions.",
      imageUrl: "/resume.png",
      technologies: ["Next.js", "Python", "FastAPI", "TailwindCSS", "Gemini llm"],
      githubUrl: "https://github.com/MohammedYaseenRon/COHERENCE-25_CodeWizard_AIML.git",
      liveUrl: "https://recruiter-app.example.com",
      icon: <Users className="w-6 h-6 text-green-500" />,
      accentColor: "green",
    },
  ]

  const getAccentClasses = (accentColor: string): AccentClassConfig => {
    const classes: AccentClasses = {
      purple: {
        hover: "group-hover:text-purple-600",
        bg: "bg-purple-100",
        icon: "text-purple-500",
        border: "border-purple-300",
      },
      blue: {
        hover: "group-hover:text-blue-600",
        bg: "bg-blue-100",
        icon: "text-blue-500",
        border: "border-blue-300",
      },
      green: {
        hover: "group-hover:text-green-600",
        bg: "bg-green-100",
        icon: "text-green-500",
        border: "border-green-300",
      },
    }
    return classes[accentColor] || classes.purple
  }

  return (
    <section id="projects" className="py-12 md:py-16 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-opacity duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-teal-400">Projects</h2>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => {
                const accentClasses = getAccentClasses(project.accentColor)

                return (
                  <div
                    key={project.id}
                    className={`w-full rounded-xl overflow-hidden group bg-gray-900 shadow-lg border border-gray-800 transition-all duration-300 hover:-translate-y-1 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{
                      transitionDelay: `${project.id * 100}ms`,
                      transitionProperty: "opacity, transform",
                    }}
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        width={400}
                        height={225}
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors`}
                          >
                            <Github className={`w-6 h-6 ${accentClasses.icon}`} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors`}
                          >
                            <ExternalLink className={`w-6 h-6 ${accentClasses.icon}`} />
                          </a>
                        )}
                      </div>
                      <div className="absolute top-4 left-4 p-2 rounded-full bg-gray-900/80">{project.icon}</div>
                    </div>

                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-2 text-white ${accentClasses.hover} transition-colors`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs flex items-center gap-1 border ${accentClasses.border}`}
                          >
                            <Code className={`w-3 h-3 ${accentClasses.icon}`} />
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
