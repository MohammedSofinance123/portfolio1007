import React from "react";

const experienceData = [
  {
    title: "Ingénieur Informatique",
    company: "Sofinance SPA",
    date: "2025 – Présent",
    points: [
      "Projet de gestion commerciale : simulation client, offres centralisées.",
      "Sécurité des données & confidentialité renforcée.",
      "Collaboration transverse entre équipes métier et dev.",
    ],
  },
  {
    title: "Développeur Full Stack",
    company: "Intaj Mohtawayat",
    date: "2024",
    points: [
      "Création de chatbots pour UAR et Algérie Télécom.",
      "Développement de la plateforme MIM (authentification, sécurité, scalabilité).",
    ],
  },
  {
    title: "Développeur Web/Mobile",
    company: "KIL Industrie",
    date: "2024 – 2025",
    points: [
      "Plateforme de gestion intelligente de parkings.",
      "Optimisation des performances UI/UX.",
    ],
  },
  {
    title: "Projets Techniques & Scientifiques",
    company: "Flutter / IA / IoT",
    date: "2023 – 2024",
    points: [
      "QOW-Pro : Application Flutter pour la qualité de l’eau.",
      "Prédiction IA de fuites sur capteurs IoT.",
    ],
  },
  {
    title: "Stages Industriels",
    company: "Sonelgaz, Lafarge, URER-MS",
    date: "2021 – 2022",
    points: [
      "Stage Sonelgaz : supervision automatisée industrielle.",
      "Stage URER-MS : commande intelligente et énergie renouvelable.",
      "Stage Lafarge : audit énergétique industriel.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Mon Expérience & Compétences
          </h2>
          <p className="text-xl mt-4 text-gray-300">
            Voici un aperçu complet de mon parcours professionnel, de mes projets, et des technologies que j’utilise.
          </p>
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
    </div>
  );
};

export default Experience;
