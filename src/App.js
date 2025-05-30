import React from "react";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="scroll-smooth"> {/* Pour activer scroll fluide en Tailwind */}
      <Navbar />
      <SocialLinks />
      <Home />         {/* id="home" */}
      <About />        {/* id="about" */}
      <Skills />       {/* id="skills" */}
      <Experience />   {/* id="experience" */}
      <Portfolio />    {/* id="portfolio" */}
      <Contact />      {/* id="contact" */}
    </div>
  );
}

export default App;
