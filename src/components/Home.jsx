import React from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight } from "react-icons/md";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-20 scroll-mt-20"
      aria-label={t("home.aria_label", "Section Accueil")}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-12 md:flex-row">

        {/* ---------- IMAGE PROFIL ---------- */}
        <div className="md:w-1/3 w-full flex justify-center">
          <img
            src={profileImage}
            alt={t("home.profile_alt", "Photo de DJEGHABA MOHAMMED BAHA EDDINE")}
            className="rounded-3xl shadow-2xl w-[220px] md:w-[280px] lg:w-[300px] hover:scale-105 transition duration-300"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* ---------- TEXTE & BOUTONS ---------- */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            {t("home.title_part1", "Ingénieur Réseaux &")} <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t("home.title_highlight", "Intelligence Artificielle")}
            </span>{" "}
            | <br />
            {t("home.title_part2", "Développeur Full Stack Web & Mobile")}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {t(
              "home.description",
              "Diplômé en ingénierie des réseaux industriels et intelligence artificielle, avec un Master en télécommunications. Compétences solides en systèmes informatiques, développement web (MERN, Flutter), cybersécurité et solutions IA/IoT. Passionné par l’innovation numérique et les systèmes distribués performants."
            )}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#portfolio"
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            >
              {t("home.btn_portfolio", "Portfolio")}
              <MdKeyboardArrowRight
                className="group-hover:rotate-90 transition-transform duration-300"
                size={25}
                aria-hidden="true"
              />
            </a>

            <a
              href="/CV-v2.pdf"
              download="DJEGHABA_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            >
              {t("home.btn_download_cv", "Télécharger CV")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


// import React from "react";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import profileImage from "../assets/profile.jpg";

// const Home = () => {
//   return (
//     <section
//       name="home"
//       className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-20"
//     >
//       <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
//         {/* -------- TEXTE -------- */}
//         <div className="md:w-2/3 w-full text-center md:text-left">
//           <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
//             Ingénieur Réseaux & <br />
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Intelligence Artificielle
//             </span>{" "}
//             |<br />
//             Développeur Full Stack Web & Mobile
//           </h1>

//           <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
//             Diplômé en ingénierie des réseaux industriels et intelligence artificielle,
//             avec un Master en télécommunications. Compétences solides en systèmes
//             informatiques, développement web (MERN, Flutter), cybersécurité et
//             intelligence artificielle (IoT, IA). Passionné par l'innovation numérique
//             et les systèmes distribués.
//           </p>

//           {/* -------- BOUTONS -------- */}
//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
//             <a
//               href="#portfolio"
//               className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
//             >
//               Portfolio
//               <MdKeyboardArrowRight className="group-hover:rotate-90 transition-transform duration-300" size={25} />
//             </a>

//             <a
//               href="/CV-v2.pdf"
//               download="DJEGHABA_CV.pdf"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
//             >
//               Télécharger CV
//             </a>
//           </div>
//         </div>

//         {/* -------- IMAGE -------- */}
//         <div className="md:w-1/3 w-64 mx-auto">
//           <img
//             src={profileImage}
//             alt="Photo de DJEGHABA MOHAMMED BAHA EDDINE"
//             className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

// import React from "react";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import profileImage from "../assets/profile.jpg";

// const Home = () => {
//   return (
//     <section
//       name="home"
//       className="pt-20 w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
//         {/* TEXTE */}
//         <div className="flex flex-col justify-center md:w-2/3">
//           <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
//             Ingénieur Réseaux &<br />
//             <span className="text-cyan-400">
//               Intelligence Artificielle
//             </span>{" "}
//             |<br />
//             Développeur Full Stack Web & Mobile
//           </h1>

//           <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
//             Diplômé en ingénierie des réseaux industriels et intelligence
//             artificielle, avec un Master en télécommunications. Expertise en
//             systèmes informatiques, développement web (MERN, Flutter) et
//             solutions intelligentes (IoT, IA). Passionné par l'innovation
//             numérique, la cybersécurité et les systèmes distribués performants.
//           </p>

//           {/* BOUTONS */}
//           <div className="mt-6 flex gap-4">
//             <a
//               href="#portfolio"
//               className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
//             >
//               Portfolio
//               <MdKeyboardArrowRight className="group-hover:rotate-90 transition-transform duration-300" size={25} />
//             </a>

//             <a
//               href="/CV-v2.pdf"
//               download="DJEGHABA_CV.pdf"
//               target="_blank"
//               rel="noreferrer"
//               className="hidden md:flex items-center justify-center text-white px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md hover:scale-105 transition-transform duration-300"
//             >
//               Télécharger CV
//             </a>
//           </div>
//         </div>

//         {/* IMAGE */}
//         <div className="mt-10 md:mt-0 md:w-1/3">
//           <img
//             src={profileImage}
//             alt="Profil"
//             className="rounded-2xl shadow-xl mx-auto w-[250px] md:w-[300px] hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
