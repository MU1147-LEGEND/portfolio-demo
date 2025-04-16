import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your project.",
      demo: "#",
      code: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of your project.",
      demo: "#",
      code: "#",
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
