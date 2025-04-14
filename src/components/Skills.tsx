'use client'
import {
  Code2,
  Database,
  Figma,
  Layers,
  Server,
  TerminalSquare,
} from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

const skills = [
  { name: 'HTML5', icon: <Code2 className="text-orange-400" size={28} /> },
  { name: 'CSS3', icon: <Layers className="text-blue-400" size={28} /> },
  { name: 'JavaScript', icon: <TerminalSquare className="text-yellow-400" size={28} /> },
  { name: 'TypeScript', icon: <TerminalSquare className="text-blue-400" size={28} /> },
  { name: 'React.js', icon: <Code2 className="text-cyan-400" size={28} /> },
  { name: 'Next.js', icon: <Server className="text-white" size={28} /> },
  { name: 'Node.js', icon: <Server className="text-green-400" size={28} /> },
  { name: 'Express.js', icon: <Server className="text-green-400" size={28} /> },
  { name: 'Tailwind CSS', icon: <Layers className="text-sky-400" size={28} /> },
  { name: 'MongoDB', icon: <Database className="text-green-500" size={28} /> },
  { name: 'Postgres', icon: <Database className="text-green-500" size={28} /> },
  { name: 'Prisma', icon: <Database className="text-green-500" size={28} /> },
  { name: 'Figma', icon: <Figma className="text-pink-400" size={28} /> },
]

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-[#0A0A0A] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-14"
        >
          My <span className="text-teal-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/30 hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="mt-4 text-white text-base font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
