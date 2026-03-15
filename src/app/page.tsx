"use client"

import Contact from "@/components/Contacts"
import { AboutUs } from "../components/AboutUs"
import Header from "../components/HeroSection"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0d0d0d] flex justify-center">
      <div className="w-full md:w-[800px] flex flex-col border-x border-[#1e1e1e]">
        <Navbar />
        <div className="px-6">
          <Header />
          <Skills />
          <AboutUs />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>

      </div>
    </main>
  )
}