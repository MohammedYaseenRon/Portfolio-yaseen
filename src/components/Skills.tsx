import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Javascript",
  "Typescript",
  "Html",
  "Css",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Restful API's",
  "Zustand",
  "Software Development Lifecycle(SDLC)",
  "Agile",
  "React Native",
  "Tailwind Css",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Git",
  "Vps Hosting"
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="skills"
      className="mx-auto flex flex-col w-full p-6 md:w-[700px] justify-center relative"
    >
      <h2 className="font-mono text-xl font-bold dark:text-white mb-6">
        Skills 
      </h2>

      <div className="flex flex-wrap gap-2 pt-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="cursor-pointer inline-flex items-center gap-2 border-1 md:border-2 border-dashed border-zinc-300 dark:border-neutral-700 md:rounded-sm rounded-sm bg-transparent px-2 md:px-2 py-1 md:py-1 md:text-sm text-xs text-zinc-900 dark:text-neutral-100 transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
