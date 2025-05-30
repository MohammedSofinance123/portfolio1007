import React from "react";
import Navbar from "./components/Navbar";
// import LanguageSwitcher from "./components/LanguageSwitcher";  <-- supprimer cet import
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="scroll-smooth bg-gradient-to-b from-black via-black to-gray-900 text-gray-300 min-h-screen">
      <Navbar />
      {/* <LanguageSwitcher />  supprimer ceci */}
      <SocialLinks />

      <main className="pt-20">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} DJEGHABA MOHAMMED BAHA EDDINE - Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
