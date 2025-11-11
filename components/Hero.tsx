import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto flex items-center justify-center text-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-500">Michael Reiner Magat</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-secondary max-w-3xl mx-auto">
          I'm a Computer Science Student from BSCS 3A with a passion for Web design and a background in database management. I love to build beautiful and user-friendly web applications.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;