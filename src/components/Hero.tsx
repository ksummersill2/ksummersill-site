import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 animated-bg opacity-30"></div>
      <div className="z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-pulse-slow">
          Kevin Summersill
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-blue-300">
          IT Visionary & DevSecOps Architect
        </p>
        <div className="flex justify-center space-x-8 mb-8"></div>
        <div className="flex space-x-4">
          <a
            href="#about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce z-10">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;