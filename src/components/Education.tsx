"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { BriefcaseBusiness, GraduationCap } from "lucide-react"

const education = [
  {
    title: "BE Computer Science Engineering",
    university: "Mumbai University",
    period: "2022 - 2026",
    description:
      "Currently pursuing a Bachelor degree with a focus on Web Development and Software Engineering.",
    type: "education",
  }
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="mx-auto flex flex-col w-full p-6 md:w-[700px] justify-center relative z-70">
      <div ref={ref}>
        {/* Heading */}
        <h2 className="font-mono text-xl font-bold dark:text-white mb-8">
          Education
        </h2>

        {/* Timeline */}
        <div className="flex flex-col">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex gap-6 pb-8 last:pb-0 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg border border-[#2a2a2a] bg-[#111] flex items-center justify-center shrink-0">
                  {(
                    <GraduationCap size={14} className="text-[#ca8a04]" />
                  )}
                </div>
              </div>

              <div className="flex-1 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-mono text-sm font-medium dark:text-[#e8e8e8]">
                    {edu.title}
                  </h3>
                  <span className="font-mono text-xs text-[#555] shrink-0">
                    {edu.period}
                  </span>
                </div>

                <p className="font-mono text-xs text-[#888] mb-3">
                  {edu.university}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education