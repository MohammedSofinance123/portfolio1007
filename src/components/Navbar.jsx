import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Traduire les liens de navigation
  const links = ["home", "about", "skills", "experience", "portfolio", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black bg-opacity-40
        transition-all duration-300
        ${scrolled ? "h-14 shadow-lg bg-opacity-70" : "h-20"}
        flex items-center
      `}
      aria-label={t("navbar.aria_label", "Main navigation")}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-12 w-full">
        {/* Logo / Titre */}
        <h1
          className={`text-white font-extrabold select-none text-2xl md:text-3xl transition-transform duration-300 ${
            scrolled ? "scale-90" : "scale-100"
          }`}
        >
          {t("navbar.logo", "Portfolio")}
        </h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-12 font-semibold tracking-wide text-gray-300">
          {links.map((link) => (
            <li key={link} className="relative group cursor-pointer">
              <a
                href={`#${link}`}
                className="capitalize py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {t(`navbar.links.${link}`, link)}
              </a>
              {/* Underline animé */}
              <span
                className="
                  absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400
                  group-hover:w-full transition-[width] duration-300 ease-in-out
                "
              ></span>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={toggleNav}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-2"
          aria-label={navOpen ? t("navbar.close_menu", "Close menu") : t("navbar.open_menu", "Open menu")}
          aria-expanded={navOpen}
        >
          <span
            className={`
              block w-8 h-0.5 bg-cyan-400 rounded-sm transform transition duration-300 origin-left
              ${navOpen ? "rotate-45 translate-y-2" : ""}
            `}
          ></span>
          <span
            className={`
              block w-8 h-0.5 bg-cyan-400 rounded-sm transition duration-300
              ${navOpen ? "opacity-0" : "opacity-100"}
            `}
          ></span>
          <span
            className={`
              block w-8 h-0.5 bg-cyan-400 rounded-sm transform transition duration-300 origin-left
              ${navOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-20 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md
          md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out
          ${navOpen ? "max-h-screen py-6" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col items-center space-y-6 font-semibold text-lg text-cyan-400">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setNavOpen(false)}
                className="capitalize hover:text-white transition-colors duration-300"
              >
                {t(`navbar.links.${link}`, link)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
