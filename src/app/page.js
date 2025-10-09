import Experience from "./section/Journey";
import Hero from "./section/Hero";
import Project from "./section/Project";
import Skills from "./section/Skills";
import Contact from "./section/Contact";
import Nav from "./components/Nav";
import Skeleton from "./section/Skeleton";
import Lamp from "./components/Lamp";
import Music from "./components/Music";

export default function Home() {
  return (
    <div className=" " >

      <Nav />

      <Hero />
      <Experience />
      <Project />
      <Skills />
      <Skeleton/>

      <Contact />




    </div>
  );
}
