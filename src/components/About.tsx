import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    'C++', 'Java', 'JavaScript', 'C', 'PHP', 'Python',
    'HTML/CSS', 'Bootstrap', 'NodeJS', 'ReactJS', 'Tailwind CSS',
    'Git', 'GitHub', 'Postman',
    'MySQL', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Background</h3>
              <p className="text-gray-300 mb-6">
                I'm a Computer Science and Engineering student at Lovely Professional University with a CGPA of 7.43.
                My passion lies in creating innovative solutions and working with cutting-edge technologies.
              </p>
              <p className="text-gray-300">
                Through my internships at Grasim Industries Limited and Outlier.ai, I've gained valuable experience
                in enterprise systems, AI model training, and project management.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 