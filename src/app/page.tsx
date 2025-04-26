"use client";
import Contact from "@/components/Contacts";
import { AboutUs } from "../components/AboutUs";
import Header from "../components/HeroSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Header />
      <AboutUs />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
