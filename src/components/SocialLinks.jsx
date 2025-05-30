import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

const SocialLinks = () => {
  const { t } = useTranslation();

  const links = [
    {
      href: "https://linkedin.com",
      label: t("social.linkedin", "LinkedIn"),
      icon: <FaLinkedin className="text-cyan-400" />,
    },
    {
      href: "https://github.com/MohammedSofinance123",
      label: t("social.github", "GitHub"),
      icon: <FaGithub className="text-cyan-400" />,
    },
    {
      href: "mailto:yourmail@example.com",
      label: t("social.mail", "Mail"),
      icon: <FaEnvelope className="text-cyan-400" />,
    },
    {
      href: "/CV-v2.pdf",
      label: t("social.cv", "CV"),
      icon: <FaFileAlt className="text-cyan-400" />,
      download: true,
    },
  ];

  return (
    <nav
      aria-label={t("social.navigation_label", "Liens sociaux")}
      className="fixed top-[53%] left-0 hidden lg:flex flex-col space-y-4 z-50"
    >
      <ul>
        {links.map(({ href, label, icon, download }, i) => (
          <li
            key={i}
            className="group relative flex items-center w-44 h-14 ml-[-130px] rounded-r-3xl bg-gray-800 bg-opacity-90 shadow-lg
              hover:ml-0 hover:shadow-cyan-500/60 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600
              transition-all duration-400 ease-in-out cursor-pointer"
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              download={download || undefined}
              className="flex justify-between items-center w-full px-6 text-white text-base font-semibold
                focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-60 rounded-r-3xl"
              aria-label={label}
              tabIndex={0}
            >
              <span className="truncate">{label}</span>
              <span className="ml-4 text-2xl">{icon}</span>
            </a>

            <span
              role="tooltip"
              className="absolute left-full top-1/2 -translate-y-1/2 ml-3 rounded-md bg-cyan-600 px-2 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 pointer-events-none select-none transition-opacity duration-300"
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
