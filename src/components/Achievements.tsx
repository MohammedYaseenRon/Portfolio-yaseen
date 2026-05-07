"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "GNEC Global Hackathon",
    result: "3rd Place · 60+ Teams",
    badge: "🥉",
    description:
      "Ranked 3rd out of 60+ competing teams. Built a React Native + Node.js app under 24 hours — led the team, managed delivery, and shipped a working product end to end.",
    tags: ["React Native", "Node.js", "TypeScript", "MongoDB"],
    github: "https://github.com/Sumeet-2023/CityFix.git",
  },
  {
    title: "AI For Good Hackathon",
    result: "Top 17 · 100 Teams",
    badge: "🏅",
    description:
      "Built a voice and text based AI agent using Google's Agent Development Kit to support thalassemia patients — collaborated with an NGO to understand real patient needs and deliver a solution aimed at making healthcare more accessible for those affected.",
    tags: [
      "Google ADK",
      "Azure",
      "Voice Agent",
      "AI Agent",
      "NGO Collaboration",
      "Healthcare",
    ],
    github: null,
  },
  {
    title: "Multiple Hackathons",
    result: "Consistent Participant",
    badge: "⚡",
    description:
      "Actively participated in several hackathons beyond placements — contributing technically, managing teammates, and learning how real teams operate under pressure and tight deadlines.",
    tags: ["Leadership", "Teamwork", "Fast-paced Execution"],
    github: null,
  },
];

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const AchievementsSection = () => {
  return (
    <section className="flex-1">
      <div className="mx-auto flex flex-col w-full p-6 md:w-[700px] justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl font-bold font-mono">Achievements</span>
        </motion.div>

        <div className="mt-4 flex flex-col gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="border border-[#2a2a2a] rounded-lg p-4 hover:border-[#444] transition-all group"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-base">{item.badge}</span>
                  <span className="font-mono font-bold text-sm text-white">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo for ${item.title}`}
                      className="w-[28px] h-[28px] border border-[#2a2a2a] rounded flex items-center justify-center text-[#555] hover:border-[#444] hover:text-white transition-all"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  <span className="font-mono text-xs text-[#555] border border-[#2a2a2a] rounded px-2 py-0.5 group-hover:border-[#444] transition-all">
                    {item.result}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-mono text-sm text-[#888] leading-relaxed mb-3">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-[#555] border border-[#2a2a2a] rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
