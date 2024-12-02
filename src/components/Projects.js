import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const projects = [
  {
    title: "Mental Health Fitness Tracker",
    description: "AI-powered mood detection with 90% accuracy.",
    technologies: "Python, AI",
    link: "#"
  },
  {
    title: "PICsimlab Washing Machine Simulation",
    description: "Improved modularity by 20% using PIC microcontrollers.",
    technologies: "Embedded Systems, PICsimlab",
    link: "#"
  },
  {
    title: "Alumni Management Portal",
    description: "Designed a secure backend for alumni networking.",
    technologies: "Python, Flask, Django",
    link: "#"
  }
];

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(".project-card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition project-card">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-500 mb-4">{project.technologies}</p>
              <a href={project.link} className="text-blue-500 hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;