import Experience from "./section/Journey";
import Hero from "./section/Hero";
import Project from "./section/Project";
import Skills from "./section/Skills";
import Contact from "./section/Contact";
import Nav from "./components/Nav";
import Skeleton from "./section/Skeleton";
import Spider from "./section/Spider";
import EasterEgg from "./components/EasterEgg";

export default function Home() {
  return (
    <div className=" " >

      <Nav />
      <EasterEgg />
      <Hero />
      <Experience />
      <Project />
      <Skills />
      <Skeleton />

      <Spider />

      <Contact />




    </div>
  );
}
