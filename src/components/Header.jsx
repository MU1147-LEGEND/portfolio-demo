import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white fixed w-full z-10 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold"> <a href="/">Portfolio</a> </h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
