import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import CircleAnimation from './CircleAnimation';

const certifications = [
  {
    title: "Statistics Onramp",
    issuer: "ISRO",
    logo: "/path/to/logo1.svg"
  },
  {
    title: "AI for MATLAB",
    issuer: "MathWorks",
    logo: "/path/to/logo2.svg"
  },
  {
    title: "Postman API Fundamentals",
    issuer: "Student Expert",
    logo: "/path/to/logo3.svg"
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft",
    logo: "/path/to/logo4.svg"
  },
  {
    title: "Machine Learning",
    issuer: "Coursera",
    logo: "/path/to/logo5.svg"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    logo: "/path/to/logo6.svg"
  }
];

const Certifications = () => {
  useEffect(() => {
    gsap.fromTo(".cert-card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <section id="certifications" className="py-20">
      <CircleAnimation />
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition cert-card">
              <img src={cert.logo} alt={cert.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">{cert.title}</h3>
              <p className="text-gray-700 text-center">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;