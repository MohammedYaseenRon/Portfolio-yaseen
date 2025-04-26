"use client"
import { Code2, Database, Figma, Layers, Server, TerminalSquare } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

const skills = [
  { name: "HTML5", icon: <Code2 className="text-orange-400" size={28} /> },
  { name: "CSS3", icon: <Layers className="text-blue-400" size={28} /> },
  { name: "JavaScript", icon: <TerminalSquare className="text-yellow-400" size={28} /> },
  { name: "TypeScript", icon: <TerminalSquare className="text-blue-400" size={28} /> },
  { name: "React.js", icon: <Code2 className="text-cyan-400" size={28} /> },
  { name: "Next.js", icon: <Server className="text-white" size={28} /> },
  { name: "Node.js", icon: <Server className="text-green-400" size={28} /> },
  { name: "Express.js", icon: <Server className="text-green-400" size={28} /> },
  { name: "Tailwind CSS", icon: <Layers className="text-sky-400" size={28} /> },
  { name: "MongoDB", icon: <Database className="text-green-500" size={28} /> },
  { name: "Postgres", icon: <Database className="text-green-500" size={28} /> },
  { name: "Prisma", icon: <Database className="text-green-500" size={28} /> },
  { name: "Figma", icon: <Figma className="text-pink-400" size={28} /> },
]

export const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-opacity duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-white text-center mb-14">
            My <span className="text-teal-400">Skills</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/30 hover:scale-105 duration-300"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease, transform 0.5s ease`,
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="text-3xl">{skill.icon}</div>
                <p className="mt-4 text-white text-base font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
