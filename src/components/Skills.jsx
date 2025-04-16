import React from "react";

const Skills = () => {
  const skills = {
    Languages: ["HTML", "CSS", "JavaScript", "Python"],
    Frameworks_Libraries: ["React", "Tailwind CSS"],
    Version_Control: ["Git", "GitHub"],
    Tools: ["npm", "yarn", "Vite"],
    Deployment: ["Netlify", "Vercel", "Railway"],
    Others: ["Responsive Design", "SEO Basics", "Debugging"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="space-y-8">
          {Object.keys(skills).map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-4">{category.replace("_", " & ")}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills[category].map((skill, idx) => (
                  <span key={idx} className="bg-blue-500 text-white px-4 py-2 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
