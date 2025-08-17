import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Divestic - A Simple UI Application ",
      description: "Divestic is a simple and clean UI application designed for efficient user interaction. It offers a minimalistic interface, smooth navigation, and essential features, making it ideal for beginners and developers seeking inspiration for intuitive frontend design.",
      demo: "https://divestic.vercel.app/",
      code: "https://github.com/MU1147-LEGEND/Divestic",
    },
    {
      title: "Burger Shop",
      description: "Burger Shop is a simple, responsive webpage built with HTML and CSS. It features a clean layout, attractive design, and is perfect for showcasing a small fast-food or burger business online",
      demo: "http://mohammadullah.me/Radiance-Copy/",
      code: "https://github.com/MU1147-LEGEND/Radiance-Copy",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-4">
                <a href={project.demo} className="text-blue-500 hover:underline mr-4">Live Demo</a>
                <a href={project.code} className="text-blue-500 hover:underline">Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
