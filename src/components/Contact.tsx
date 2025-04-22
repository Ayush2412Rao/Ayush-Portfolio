import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactInfo = {
    email: 'ayushrao786420@gmail.com',
    phone: '+91-7667880422',
    linkedin: 'linkedin.com/in/ayush-ar-rao/',
    github: 'github.com/Ayush2412Rao'
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-12 text-lg">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href={`mailto:${contactInfo.email}`}
              className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.a>

            <motion.a
              href={`tel:${contactInfo.phone}`}
              className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </motion.a>

            <motion.a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">{contactInfo.linkedin}</p>
            </motion.a>

            <motion.a
              href={`https://${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">{contactInfo.github}</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 