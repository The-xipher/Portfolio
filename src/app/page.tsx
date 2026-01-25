import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm glass border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} Amith M P. All rights reserved.</p>
      </footer>
    </main>
  );
}
