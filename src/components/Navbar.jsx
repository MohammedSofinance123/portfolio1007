import React from "react";

const Navbar = () => {
  const links = ["home", "about", "skills", "experience", "portfolio", "contact"];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed top-0 z-50">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li
            key={link}
            className="capitalize cursor-pointer text-gray-500 hover:text-white hover:scale-105 duration-200"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
