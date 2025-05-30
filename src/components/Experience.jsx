import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  // Récupérer les données traduites (tableaux dans les fichiers JSON)
  const experienceData = t("experience.data", { returnObjects: true });

  return (
    <section
      id="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20"
      aria-label={t("experience.title")}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
            {t("experience.title")}
          </h2>
          <p className="text-xl mt-4 text-gray-300">{t("experience.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-cyan-500/50 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {item.title} – <span className="text-white">{item.company}</span>
              </h3>
              <p className="text-sm text-gray-400 mb-4">{item.date}</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-200 text-[15px]">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
