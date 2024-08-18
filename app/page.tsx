import Image from "next/image";
import HomePage from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <HomePage />

      <About />

      <Projects />

      <Contact />
    </div>
  );
}
