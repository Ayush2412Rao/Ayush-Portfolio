import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Grasim Industries Limited (ABG)",
      role: "IT Intern",
      period: "Jun - Jul 2024",
      achievements: [
        "Acquired practical experience in enterprise systems management, networking, data analysis, and ERP solutions",
        "Enhanced technical expertise and problem-solving skills by 80%",
        "Collaborated effectively in team environments",
        "Applied project management and Testing methodologies"
      ]
    },
    {
      company: "Outlier.ai",
      role: "AI Trainer",
      period: "Oct - Dec 2024",
      achievements: [
        "Enhanced AI model performance by 90%",
        "Improved model relevance through training and feedback",
        "Developed documentation and fine-tuned models",
        "Worked on innovative AI solutions and workflow refinement"
      ]
    }
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
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-700"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-blue-400">{exp.company}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl text-gray-300">{exp.role}</span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 