
// ✅ SocialLinks.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    { href: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedin size={30} /> },
    { href: "https://github.com", label: "GitHub", icon: <FaGithub size={30} /> },
    { href: "mailto:yourmail@example.com", label: "Mail", icon: <FaEnvelope size={30} /> },
    { href: "/CV-v2.pdf", label: "CV", icon: <FaFileAlt size={30} />, download: true },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[53%] left-0 fixed">
      <ul>
        {links.map(({ href, label, icon, download }, i) => (
          <li key={i} className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
            <a href={href} target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white" {...(download ? { download: true } : {})}>
              {label} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
