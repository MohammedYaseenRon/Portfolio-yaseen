import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Git",
  "Tailwind CSS",
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="font-mono text-xl font-bold text-white mb-6">
        Skills <span className="text-[#555]">#</span>
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-2 border border-[#2a2a2a] rounded-lg text-[#aaa] transition-all cursor-default hover:border-[#444] hover:text-[#e8e8e8]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
