import React from 'react';
import { Briefcase, Calendar, Award, Cpu, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 mb-8 md:mb-0 animate-slide-in">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
            alt="Kevin Summersill Avatar"
            className="w-64 h-64 mx-auto rounded-full border-4 border-blue-400 shadow-lg animate-float"
          />
        </div>
        <div
          className="md:w-2/3 md:pl-12 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <p className="text-lg mb-6">
            With over 22 years of experience in the IT world, I've journeyed from an intern to becoming a leading figure in DevSecOps and IT architecture. My career has been marked by continuous learning, innovation, and a passion for solving complex technological challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition duration-300">
              <Briefcase className="mr-3 text-blue-400" />
              <span>IT Excellence</span>
            </div>
            <div className="flex items-center bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition duration-300">
              <Calendar className="mr-3 text-blue-400" />
              <span>22+ Years Experience</span>
            </div>
            <div className="flex items-center bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition duration-300">
              <Award className="mr-3 text-blue-400" />
              <span>Industry Leader</span>
            </div>
          </div>
          <p className="text-lg">
            My expertise spans from graphic design to programming, with a specialization in DevSecOps/DevOps. I've had the privilege of working on high-impact projects for various government agencies and Fortune 500 companies. My diverse skill set and extensive experience allow me to tackle complex challenges and deliver innovative solutions that drive organizational success across multiple sectors, including aerospace, defense, emergency management, agriculture, and healthcare.
          </p>
          <div className="flex justify-center space-x-8 mt-8">
            <Cpu size={32} className="text-purple-400 animate-float" />
            <Globe
              size={32}
              className="text-green-400 animate-float"
              style={{ animationDelay: '0.5s' }}
            />
            <Zap
              size={32}
              className="text-yellow-400 animate-float"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;