"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Github, ExternalLink, Video, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "HireMe",
    description:
      "HireMe is a full-stack technical hiring platform that enables recruiters to create and schedule coding challenges, review candidate submissions with live Sandpack previews, and get instant AI-powered evaluations with scoring, breakdowns, and feature analysis — all with a real-time leaderboard powered by Socket.io.",
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Socket.io", "Sandpack", "Gemini AI", "Tailwind CSS", "Cloudinary"],
    githubUrl: "https://github.com/MohammedYaseenRon/Talent_Arena.git",
  },
  {
    id: 2,
    title: "Market Place",
    description:
      "Built a marketplace where multiple vendors can list products, manage inventory, and process orders — with Razorpay checkout, role-gated dashboards for admins, vendors, and customers, and real-time cart sync.",
    technologies: ["Next.js", "TypeScript", "Postgres", "MediaPipe", "Gemini LLM", "Tailwind CSS", "ReChart"],
    githubUrl: "https://github.com/MohammedYaseenRon/social-acc.git",
  },
  {
    id: 3,
    title: "Cityfix",
    description:
      "Built a community platform for reporting local issues and tracking resolutions. Implemented features like project creation, voting, and collaborative mapping to support sustainability initiatives. Added a clan system for organizing events, managing members, and fundraising. Designed a public dashboard for transparency in issue tracking and civic participation.",
    technologies: ["ReactNative", "Javscript", "Nodejs", "Tailwind CSS", "Zustand"],
    githubUrl: "https://github.com/MohammedYaseenRon/social-acc.git",
  },
  {
    id: 4,
    title: "Education Platform Landing Page",
    description:
      "Redesigned an education platform with a fast, responsive UI using Next.js, Tailwind CSS, and Framer Motion, improving performance and user experience.",
    technologies: ["Next.js", "TailwindCss", "Framer motion"],
    githubUrl: "https://github.com/MohammedYaseenRon/tuf-landing.git",
    liveUrl: "https://tuf-landing-xi.vercel.app",

  },
]

const INITIAL_VISIBLE = 3

function ProjectRow({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border-b border-[#1e1e1e] last:border-b-0 transition-all duration-500 py-4 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms`}}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer bg-transparent border-none"
      >
        <div className="flex items-center gap-3">
          <ChevronDown
            size={14}
            className={`text-[#555] transition-transform duration-200 shrink-0 ${open ? "rotate-0" : "-rotate-90"}`}
          />
          <span className="font-mono text-sm dark:text-[#06D6A0] font-medium tracking-tight group-hover:text-[#06D6A0]/80 transition-colors">
            {project.title}
          </span>
        </div>

        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#555] hover:text-[#e8e8e8] transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
              className="text-[#555] hover:text-[#e8e8e8] transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo video"
              className="text-[#555] hover:text-[#e8e8e8] transition-colors"
            >
              <Video size={16} />
            </a>
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-6 pb-6">
          <p className="font-mono text-sm text-[#888] leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1 border border-[#2a2a2a] rounded dark:text-[#aaa] hover:border-[#444] hover:text-[#e8e8e8] transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE)

  return (
    <section id="projects" className="mx-auto flex flex-col w-full p-6 md:w-[700px] justify-center relative border-b border-[#1e1e1e]">
      <div ref={ref}>
        <h2 className="font-mono text-xl font-bold dark:text-white mb-2">
          Projects <span className="text-[#555]">#</span>
        </h2>

        <div className="flex flex-col mt-4">
          {visibleProjects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {projects.length > INITIAL_VISIBLE && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 font-mono text-xs text-[#555] hover:text-[#06D6A0] transition-colors flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
          >
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${showAll ? "rotate-180" : "rotate-0"}`}
            />
            {showAll ? "show less" : `show ${projects.length - INITIAL_VISIBLE} more`}
          </button>
        )}
      </div>
    </section>
  )
}