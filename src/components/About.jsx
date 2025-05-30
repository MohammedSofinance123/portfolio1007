import React from "react";

const About = () => (
  <section
    id="about"
    className="pt-20 w-full bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center h-full">
      <div className="pb-8">
        <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
          À propos de moi
        </h2>
      </div>

      <p className="text-xl leading-relaxed text-gray-300">
        Ingénieur diplômé en <span className="text-cyan-400 font-semibold">réseaux industriels</span> et en
        <span className="text-cyan-400 font-semibold"> intelligence artificielle</span>, titulaire également d’un Master en
        <span className="text-cyan-400 font-semibold"> télécommunications</span>. Mon parcours académique solide, validé par
        d'excellents résultats à l’École Supérieure en Sciences Appliquées de Tlemcen
        et à l’École Nationale Supérieure des Énergies Renouvelables (URER-MS), m’a
        permis de maîtriser les fondamentaux des systèmes distribués, de la cybersécurité,
        et des architectures modernes web et mobile.
      </p>

      <p className="text-xl mt-6 leading-relaxed text-gray-300">
        Passionné par les <span className="text-cyan-400">technologies émergentes</span> et l’innovation, je conçois des
        solutions intelligentes (IoT/IA) et performantes en full stack (React, Node.js,
        Flutter, MongoDB). Mon profil allie rigueur scientifique, maîtrise technique,
        et esprit d’équipe. Je suis à la recherche de nouveaux défis professionnels
        pour mettre en œuvre mes compétences, apprendre en continu et contribuer
        efficacement à des projets innovants.
      </p>
    </div>
  </section>
);

export default About;
