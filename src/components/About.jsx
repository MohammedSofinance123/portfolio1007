import React from "react";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="pt-20 w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
      aria-label={t("about.title", "À propos de moi")}
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500 mb-8">
          {t("about.title", "À propos de moi")}
        </h2>

        <p className="text-xl leading-relaxed text-gray-300">
          <Trans
            i18nKey="about.paragraph1"
            components={{
              industrial: <span className="text-cyan-400 font-semibold" />,
              ai: <span className="text-cyan-400 font-semibold" />,
              telecom: <span className="text-cyan-400 font-semibold" />
            }}
          >
            Ingénieur diplômé en <industrial>réseaux industriels</industrial> et en <ai>intelligence artificielle</ai>, titulaire également d’un Master en <telecom>télécommunications</telecom>. Mon parcours académique solide, validé par d'excellents résultats à l’École Supérieure en Sciences Appliquées de Tlemcen et à l’École Nationale Supérieure des Énergies Renouvelables (URER-MS), m’a permis de maîtriser les fondamentaux des systèmes distribués, de la cybersécurité, et des architectures modernes web et mobile.
          </Trans>
        </p>

        <p className="text-xl mt-6 leading-relaxed text-gray-300">
          <Trans
            i18nKey="about.paragraph2"
            components={{ tech: <span className="text-cyan-400 font-semibold" /> }}
          >
            Passionné par les <tech>technologies émergentes</tech> et l’innovation, je conçois des solutions intelligentes (IoT/IA) et performantes en full stack (React, Node.js, Flutter, MongoDB). Mon profil allie rigueur scientifique, maîtrise technique, et esprit d’équipe. Je suis à la recherche de nouveaux défis professionnels pour mettre en œuvre mes compétences, apprendre en continu et contribuer efficacement à des projets innovants.
          </Trans>
        </p>
      </div>
    </section>
  );
};

export default About;
