

import Image from "next/image";
 import HomePage from "./home/page";
 import About from "./about/page";
 import Projects from "./projects/page";
 import Contact from "./contact/page";


export default function Home() {
  return (
    <div >
      <div className="pt-20" id="home">
      <HomePage/>
      </div >
    <div className="pt-20" id="about">
    <About/>
    </div>
    
      <div className="pt-20" id="project">
      <Projects />
      </div>
    <div className="pt-20" id="contact">
    <Contact/>
    </div>
    
    </div>
  );
}
