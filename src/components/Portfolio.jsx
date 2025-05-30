import React from "react";
import project1 from "../assets/weatherapp.png";
import project2 from "../assets/Capture.png";
import project3 from "../assets/chat1.png";

const projects = [
  { img: project1, title: "Weather Website", link: "https://weather.example.com" },
  { img: project2, title: "W-Kaufer Website", link: "https://wkaufer.example.com" },
  { img: project3, title: "ChatApp Website", link: "https://chatapp.example.com" },
];

const Portfolio = () => (
  <section
    id="portfolio"
    className="pt-20 bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</h2>
        <p className="py-6 text-xl">Découvrez quelques-unes de mes réalisations ici</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(({ img, title, link }, i) => (
          <div key={i} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={img}
              alt={title}
              className="rounded-md hover:scale-105 duration-200 w-full h-[250px]"
            />
            <p className="mt-2 text-2xl font-medium text-center">{title}</p>
            <div className="flex items-center justify-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-50 rounded-xl w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 text-center"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
