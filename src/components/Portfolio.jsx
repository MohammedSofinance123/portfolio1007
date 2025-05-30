import React from "react";
import { useTranslation } from "react-i18next";
import project1 from "../assets/weatherapp.png";
import project2 from "../assets/Capture.png";
import project3 from "../assets/chat1.png";

const projects = [
  { img: project1, title: "Weather Website", link: "https://weather.example.com" },
  { img: project2, title: "W-Kaufer Website", link: "https://wkaufer.example.com" },
  { img: project3, title: "ChatApp Website", link: "https://chatapp.example.com" },
];

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className="pt-20 bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
      aria-label={t("portfolio.section_title")}
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center md:text-left">
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">{t("portfolio.section_title")}</h2>
          <p className="py-6 text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
            {t("portfolio.section_description")}
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(({ img, title, link }, i) => (
            <article
              key={i}
              className="bg-gray-900 rounded-xl shadow-lg shadow-cyan-900/50 overflow-hidden flex flex-col"
            >
              <img
                src={img}
                alt={`Capture d’écran du projet ${title}`}
                className="rounded-t-xl object-cover w-full h-56 transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-center text-cyan-400">{title}</h3>
                <div className="mt-auto flex justify-center">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-full border border-cyan-500 text-cyan-500 font-semibold
                      hover:bg-cyan-500 hover:text-black transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
                    aria-label={`${t("portfolio.view_project")} ${title}`}
                  >
                    {t("portfolio.view_project")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
