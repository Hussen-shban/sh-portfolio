import Experience from "./section/Journey";
import Hero from "./section/Hero";
import Project from "./section/Project";
import Skills from "./section/Skills";
import Contact from "./section/Contact";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className=" " >

      <Nav />

      <Hero />
      <Experience />
      <Project />
      <Skills />
      <Contact />


    </div>
  );
}
