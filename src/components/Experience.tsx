"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "FullStack Developer Intern ",
    company: "4AM Tech Private Limited",
    period: "Nov2025 - Jan 2026",
    description:
      "Developed and implemented scalable application features, enhancing overall usability and improving system performance across the platform. Built and integrated RESTful APIs to enable seamless communication between frontend and backend systems. Deployed the application on a VPS server, managing server setup, environment configuration, and production hosting.",
    type: "work",
  },
  {
    title: "Frontend Developer",
    company: "TechNSure Private Limited",
    period: "Nov 2024 - Jan 2025",
    description:
      "Developed responsive web applications using React and Next.js. Collaborated with designers and backend developers to deliver high-quality products.",
    type: "work",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      className="mx-auto flex flex-col w-full p-6 md:w-[700px] justify-center relative z-70"
    >
      <div ref={ref}>
        {/* Heading */}
        <h2 className="font-mono text-xl font-bold dark:text-white mb-8">
          Work Experience
        </h2>

        {/* Timeline */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex gap-6 pb-8 last:pb-0 transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg border border-[#2a2a2a] bg-[#111] flex items-center justify-center shrink-0">
                  <BriefcaseBusiness size={14} className="text-[#ca8a04]" />
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-[#1e1e1e] mt-2" />
                )}
              </div>

              <div className="flex-1 pt-1 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-mono text-sm font-medium dark:text-[#e8e8e8]">
                    {exp.title}
                  </h3>
                  <span className="font-mono text-xs text-[#555] shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="font-mono text-xs text-[#888] mb-3">
                  {exp.company}
                </p>

                <p className="font-mono text-sm text-[#888] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
