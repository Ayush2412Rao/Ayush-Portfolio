import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Kisan Bazaar",
      description: "Assured Contract Farming Platform",
      technologies: ["React", "Javascript", "Bootstrap", "MongoDB", "Tailwind"],
      achievements: [
        "Designed and developed user-friendly interface for farmer-contractor interaction",
        "Engineered and tested for accuracy, cutting processing time by 40%",
        "Enabled seamless postings with 90% data accuracy",
        "Implemented secure payment processing system"
      ]
    },
    {
      title: "BookStore",
      description: "Online Bookstore Web Application",
      technologies: ["React", "ExpressJs", "MongoDB", "MERN Stack"],
      achievements: [
        "Developed full-stack application using MERN stack",
        "Implemented user authentication and shopping cart features",
        "Improved user experience by 50%",
        "Added book reviews and rating system"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 