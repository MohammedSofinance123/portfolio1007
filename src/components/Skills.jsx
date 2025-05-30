import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

const techs = [
  { id: 1, src: html, title: "HTML", border: "border-orange-500" },
  { id: 2, src: css, title: "CSS", border: "border-blue-500" },
  { id: 3, src: javascript, title: "JavaScript", border: "border-yellow-400" },
  { id: 4, src: reactLogo, title: "React", border: "border-cyan-400" },
  { id: 5, src: nodejs, title: "Node.js", border: "border-green-500" },
  { id: 6, src: mongodb, title: "MongoDB", border: "border-green-400" },
  { id: 7, src: tailwind, title: "Tailwind CSS", border: "border-sky-400" },
  { id: 8, src: github, title: "GitHub", border: "border-gray-400" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block">
            Compétences Techniques
          </h2>
          <p className="text-gray-300 text-lg mt-4">
            Voici les technologies que j'utilise dans mes projets professionnels :
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, border }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center border-t-4 ${border} hover:scale-105 transition-transform duration-300 rounded-xl bg-gray-800 p-6 shadow-lg`}
            >
              <img src={src} alt={title} className="w-16 h-16 mb-4" />
              <p className="text-lg font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
