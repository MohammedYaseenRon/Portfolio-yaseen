"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Github, ExternalLink, Video } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  year: string
  gradient: string
  image?: string
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "HireMe",
    year: "2024",
    description:
      "Full-stack technical hiring platform enabling recruiters to create coding challenges, review submissions with live Sandpack previews, and get AI-powered evaluations with a real-time leaderboard.",
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Socket.io", "Sandpack", "Gemini AI", "Tailwind CSS"],
    gradient: "from-[#0d1b2a] via-[#1b263b] to-[#1a1a2e]",
    image: "/hireme.png", // add your screenshot here
    githubUrl: "https://github.com/MohammedYaseenRon/Talent_Arena.git",
  },
  {
    id: 2,
    title: "Market Place",
    year: "2024",
    description:
      "Multi-vendor marketplace with Razorpay checkout, role-gated dashboards for admins, vendors and customers, and real-time cart sync.",
    technologies: ["Next.js", "TypeScript", "Postgres", "Gemini LLM", "Tailwind CSS", "ReChart"],
    gradient: "from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e]",
    image: "/projects/marketplace.png",
    githubUrl: "https://github.com/MohammedYaseenRon/social-acc.git",
  },
  {
    id: 3,
    title: "Cityfix",
    year: "2024",
    description:
      "Community platform for reporting local issues with voting, collaborative mapping, clan system for events and fundraising, and a public transparency dashboard.",
    technologies: ["React Native", "JavaScript", "Node.js", "Tailwind CSS", "Zustand"],
    gradient: "from-[#0a1a0d] via-[#0d2e1a] to-[#0a1a0d]",
    image: "/projects/cityfix.png",
    githubUrl: "https://github.com/MohammedYaseenRon/social-acc.git",
  },
  {
    id: 4,
    title: "Education Platform",
    year: "2024",
    description:
      "Redesigned education platform with a fast, responsive UI using Next.js, Tailwind CSS, and Framer Motion, improving performance and user experience.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-[#1a1200] via-[#2e2000] to-[#1a1200]",
    image: "/projects/education.png",
    githubUrl: "https://github.com/MohammedYaseenRon/tuf-landing.git",
    liveUrl: "https://tuf-landing-xi.vercel.app",
  },
]

const glowColors: Record<number, string> = {
  1: "rgba(6,214,160,0.25)",
  2: "rgba(180,100,255,0.25)",
  3: "rgba(0,255,120,0.20)",
  4: "rgba(255,200,0,0.20)",
}

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  return (
    <div
      className={`group relative rounded-xl overflow-hidden 
        border border-gray-200 dark:border-[#1e1e1e] 
        bg-white dark:bg-[#111]
        dark:hover:border-[#06D6A0] 
        hover:-translate-y-1 
        shadow-sm hover:shadow-lg dark:shadow-none
        transition-all duration-300
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image / Banner Area */}
      <div className={`relative w-full h-44 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
          </>
        ) : (
          <>
            {/* Fallback grid + glow when no image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(6,214,160,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,214,160,0.06) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div
              className="absolute w-36 h-36 rounded-full"
              style={{
                background: `radial-gradient(circle, ${glowColors[project.id]} 0%, transparent 70%)`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <span className="font-mono text-xs text-white/10 uppercase tracking-widest z-10 select-none">
              {project.title.toLowerCase().replace(/ /g, "-")}
            </span>
          </>
        )}

        <span className="absolute top-3 left-3 z-20 font-mono text-[10px] text-white/70 bg-black/50 backdrop-blur-sm border border-white/10 px-2 py-1 rounded">
          {project.year}
        </span>

        {/* Action links */}
        <div className="absolute top-3 right-3 z-20 flex gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 hover:text-[#06D6A0] hover:border-[#06D6A0] transition-colors"
            >
              <Github size={13} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 hover:text-[#06D6A0] hover:border-[#06D6A0] transition-colors"
            >
              <ExternalLink size={13} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 hover:text-[#06D6A0] hover:border-[#06D6A0] transition-colors"
            >
              <Video size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 bg-white dark:bg-[#111]">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-mono text-sm font-bold text-[#06D6A0]">{project.title}</h3>
          <ExternalLink
            size={13}
            className="text-gray-300 dark:text-[#333] group-hover:text-[#06D6A0] transition-colors"
          />
        </div>

        <p className="text-xs text-gray-500 dark:text-[#888] leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2 py-1 
                border border-gray-200 dark:border-[#2a2a2a] 
                rounded 
                text-gray-500 dark:text-[#aaa]
                group-hover:border-gray-300 dark:group-hover:border-[#444]
                transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="mx-auto flex flex-col w-full p-6 md:w-[700px] justify-center relative">
      <div ref={ref}>
        <h2 className="font-mono text-xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}