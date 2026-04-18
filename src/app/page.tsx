"use client";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import HeroSection from "../components/HeroSection";
import Education from "@/components/Education";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <main className="mx-auto flex md:w-[800px] justify-center relative dark:border-[#1e1e1e]">
        <div className="min-h-screen w-full flex flex-col">
          <Navbar />
          <div>
            <HeroSection />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <ContactSection />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
