"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { BookOpen, Coffee, User } from "lucide-react"
import Image from "next/image"

export const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="aboutus" className="py-12 md:py-16 bg-[#0A0A0A] relative overflow-hidden">
      <div>
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-opacity duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            About <span className="text-teal-400">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div
              className="w-full md:w-2/5"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.2s",
              }}
            >
              <div className="relative group">
                <div
                  className="w-64 h-64 rounded-full mx-auto overflow-hidden bg-gradient-to-br from-teal-400 via-purple-500 to-pink-500 p-1 
                  transition-all duration-500 group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-teal-400"
                >
                  <Image
                    src="/photos.jpg"
                    width={256}
                    height={256}
                    alt="Mohammed Yaseen Ron"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
                {/* Simplified blur effects with reduced opacity for better performance */}
                <div
                  className="absolute -z-10 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl opacity-50 -top-5 -right-5 
                  transition-all duration-500 group-hover:bg-teal-400/20"
                ></div>
                <div
                  className="absolute -z-10 w-64 h-64 bg-teal-400/20 rounded-full blur-2xl opacity-50 -bottom-5 -left-5
                  transition-all duration-500 group-hover:bg-pink-500/20"
                ></div>
              </div>
            </div>
            <div
              className="w-full md:w-3/5"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.4s",
              }}
            >
              <div className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-lg mb-6 text-white">
                  Hey there! I&rsquo;m <span className="text-purple-400">Mohammed Yaseen Ron</span>, a passionate
                  Fullstack Developer who thrives on building clean, scalable, and impactful digital experiences. I love
                  bringing ideas to life with code and delivering real value through technology.
                </p>
                <p className="text-lg mb-6 text-white">
                  I specialize in modern JavaScript frameworks like React, Next.js, and Node.js, and enjoy working
                  across the entire stack to craft seamless, high-performance web applications. I'm also deeply curious
                  about the world of AI/ML and love exploring how intelligent systems can enhance user experiences and
                  solve real-world problems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      <User className="text-purple-400" size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Based in</h4>
                      <p className="text-muted-foreground">Mumbai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      <BookOpen className="text-blue-500" size={18} />
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium text-white">Education</h4>
                      <p className="text-muted-foreground">BE Computer Science Engineering</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      <Coffee className="text-red-400" size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Interests</h4>
                      <p className="text-muted-foreground">Gaming, Reading, Cooking</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="#contacts"
                    className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 hover:opacity-90 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-105 active:scale-95"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#experience"
                    className="px-6 py-3 rounded-md bg-transparent border border-purple-400 hover:border-purple-400 text-white hover:bg-purple-500/5 font-medium transition-colors hover:scale-105 active:scale-95"
                  >
                    My Experience
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
