import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Ayush Rao
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Software Developer & Tech Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Passionate about creating innovative solutions and transforming ideas into reality through code.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://linkedin.com/in/ayush-ar-rao/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
          >
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/Ayush2412Rao"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition duration-300"
          >
            View GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 