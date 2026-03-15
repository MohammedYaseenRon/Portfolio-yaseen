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
    title: "Talents Tracks",
    description:
      "TalentTrack is a full-stack job portal that enables recruiters to post jobs, schedule interviews, receive applications, and efficiently manage applicant details.",
    technologies: ["Next.js", "Node.js", "TypeScript", "Postgres", "Prisma", "Zustand", "Tailwind CSS"],
    githubUrl: "https://github.com/MohammedYaseenRon/TalentTrack",
    liveUrl: "https://talent-track-liard.vercel.app/",
  },
  {
    id: 2,
    title: "Fitness Web Application",
    description:
      "Personalized workout plans, nutrition tracking, and progress monitoring for fitness enthusiasts. Pose detection with MediaPipe and AI-powered suggestions.",
    technologies: ["Next.js", "TypeScript", "Postgres", "MediaPipe", "Gemini LLM", "Tailwind CSS", "ReChart"],
    githubUrl: "https://github.com/MohammedYaseenRon/fitness-trakcer-app.git",
  },
  {
    id: 3,
    title: "Recruiter Hire Candidate",
    description:
      "Match candidates to job roles by scanning resumes based on skills and job descriptions using AI-powered analysis.",
    technologies: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "Gemini LLM"],
    githubUrl: "https://github.com/MohammedYaseenRon/COHERENCE-25_CodeWizard_AIML.git",
    liveUrl: "https://recruiter-app.example.com",
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    description:
      "A context-aware conversational AI assistant built with RAG architecture. Supports document upload, semantic search, and multi-turn conversations.",
    technologies: ["Next.js", "Python", "LangChain", "Pinecone", "OpenAI", "FastAPI"],
    githubUrl: "https://github.com/MohammedYaseenRon/ai-chat",
  },
  {
    id: 5,
    title: "Dev Portfolio v1",
    description:
      "First iteration of personal portfolio built with vanilla React. Includes project showcase, skills section, and contact form with EmailJS integration.",
    technologies: ["React", "CSS Modules", "EmailJS", "Vercel"],
    githubUrl: "https://github.com/MohammedYaseenRon/portfolio-v1",
    liveUrl: "https://portfolio-v1.vercel.app",
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