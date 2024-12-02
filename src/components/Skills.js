import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const skills = [
  {
    name: "AI",
    description: "Deep Learning, Machine Learning",
    icon: "/path/to/ai-icon.svg",
    percentage: 90
  },
  {
    name: "Embedded Systems",
    description: "Microcontrollers, Circuit Design",
    icon: "/path/to/embedded-icon.svg",
    percentage: 80
  },
  {
    name: "Data Analytics",
    description: "Python, Pandas, SQL",
    icon: "/path/to/data-icon.svg",
    percentage: 85
  },
  {
    name: "Cloud Computing",
    description: "AWS, Azure",
    icon: "/path/to/cloud-icon.svg",
    percentage: 75
  },
  {
    name: "IoT",
    description: "Sensors, Data Communication",
    icon: "/path/to/iot-icon.svg",
    percentage: 70
  }
];

const Skills = () => {
  useEffect(() => {
    gsap.fromTo(".skill-card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Top Skills</h2>
        <div className="flex overflow-x-scroll space-x-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition skill-card">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <svg className="absolute top-0 left-0" width="64" height="64" viewBox="0 0 36 36">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="2.5"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${skill.percentage}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4caf50"
                    strokeWidth="2.5"
                  />
                </svg>
                <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{skill.name}</h3>
              <p className="text-gray-700 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;