import React from 'react';
import { Code, Server, Shield, Zap, Users, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-12 h-12 text-blue-400 mb-4" />,
    title: 'Custom Software Development',
    description:
      'Tailored solutions to meet your specific business needs, from web applications to complex systems.',
  },
  {
    icon: <Server className="w-12 h-12 text-purple-400 mb-4" />,
    title: 'DevOps Consulting',
    description:
      'Streamline your development and operations processes for faster, more reliable software delivery.',
  },
  {
    icon: <Shield className="w-12 h-12 text-green-400 mb-4" />,
    title: 'Security Audits & Implementation',
    description:
      'Comprehensive security assessments and implementation of robust security measures for your IT infrastructure.',
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-400 mb-4" />,
    title: 'Performance Optimization',
    description:
      "Boost your systems' efficiency and speed with expert performance tuning and optimization techniques.",
  },
  {
    icon: <Users className="w-12 h-12 text-red-400 mb-4" />,
    title: 'Team Training & Workshops',
    description:
      'Empower your team with cutting-edge skills through customized training programs and interactive workshops.',
  },
  {
    icon: <Cpu className="w-12 h-12 text-indigo-400 mb-4" />,
    title: 'Cloud Architecture Design',
    description:
      "Design scalable, secure, and efficient cloud infrastructures tailored to your organization's needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-center animate-float">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              {service.title}
            </h3>
            <p className="text-gray-300 text-center">{service.description}</p>
            <div className="mt-6 text-center">
              <a
                href="#contact"
                className="text-blue-400 hover:text-blue-300 font-semibold transition duration-300 inline-flex items-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
