import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";
import HonorsAndAwards from "./components/honorsAndAwards";

export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <HonorsAndAwards />
      <Education />
      <Contact />
    </div>
  );
}
