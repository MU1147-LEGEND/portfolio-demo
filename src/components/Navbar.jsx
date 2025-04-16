import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/skills" className="hover:text-blue-500">Skills</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
