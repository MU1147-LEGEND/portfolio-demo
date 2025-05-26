import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/profile.jpg";
import resume from "../assets/Front-End-Developer-resume.pdf";

const Home = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section - Introduction */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-blue-500">Mohammad Ullah</span>
          </h1>
          <p className="text-lg mb-6">
            A passionate <span className="text-blue-500">Frontend Developer</span> with expertise in building responsive, user-friendly, and visually stunning web applications. I specialize in HTML, CSS, JavaScript, and modern frameworks like React.
          </p>
          <div className="flex justify-center lg:justify-start gap-6">
            <a
              href={resume} // Replace with the actual resume file path
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 px-6 py-3 rounded text-white hover:bg-blue-600"
            >
              Download Resume
            </a>
            <Link
              to="/projects"
              className="bg-gray-800 px-6 py-3 rounded text-white hover:bg-gray-700"
            >
              My Projects
            </Link>
          </div>
        </div>

        {/* Right Section - Image/Illustration */}
        <div className="lg:w-1/2">
          <img
            src={img} // Replace with your photo or illustration
            alt="Developer Illustration"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
