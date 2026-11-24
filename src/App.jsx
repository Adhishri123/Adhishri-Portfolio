import StarCanvas from "./components/StarCanvas.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Encryption from "./components/Encryption.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-[#030014] overflow-x-hidden">
      <StarCanvas />
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <About />
          <Skills />
          <Encryption />
          <Projects />
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  );
}
