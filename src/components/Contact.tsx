"use client"

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full p-6 md:w-[700px] justify-center relative py-16">
      {/* Pill badge */}
      <div className="flex justify-center mb-6">
        <span className="font-mono text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-1.5 rounded-full font-medium">
          Contact
        </span>
      </div>

      {/* Card */}
      <div className="relative rounded-2xl border border-gray-200 dark:border-[#1e1e1e] overflow-hidden px-8 py-12 text-center">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-40 dark:opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #a0a0a0 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Fade out edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 dark:from-[#0a0a0a]/60 dark:via-transparent dark:to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 dark:from-[#0a0a0a]/80 dark:via-transparent dark:to-[#0a0a0a]/80" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-500 dark:text-[#888] leading-relaxed max-w-lg mx-auto">
            Want to chat? Just shoot me a{" "}
            <a
              href="mailto:yaseenron070@gmail.com"
              className="text-blue-500 hover:underline"
            >
              direct email
            </a>{" "}
            or reach out on{" "}
            <a
              href="https://www.linkedin.com/in/yaseen-ron/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>{" "}
            and I&apos;ll get back to you as soon as I can.
          </p>
        </div>
      </div>
    </section>
  )
}