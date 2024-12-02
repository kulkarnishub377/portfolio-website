import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const experiences = [
    {
        role: "Data Analytics Intern",
        company: "AICTE",
        description: "AI-LLMs for data analytics in agriculture and science domains.",
        duration: "Jan 2023 - Present"
    },
    {
        role: "AI Intern",
        company: "IBM",
        description: "Developed a Gen AI-powered mental health tracker.",
        duration: "Jun 2022 - Dec 2022"
    },
    {
        role: "Campus Ambassador",
        company: "GeeksforGeeks",
        description: "Promoted tech learning programs.",
        duration: "Sep 2021 - May 2022"
    }
];

const Experience = () => {
    useEffect(() => {
        gsap.fromTo(".exp-card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    }, []);

    return (
        <section id="experience" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
                <div className="relative">
                    <div className="border-l-2 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                    {experiences.map((exp, index) => (
                        <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''} exp-card`}>
                            <div className="order-1 w-5/12"></div>
                            <div className="order-1 w-5/12 px-1 py-4 bg-white rounded-lg shadow-lg">
                                <h3 className="mb-1 text-xl font-bold">{exp.role}</h3>
                                <p className="text-gray-700">{exp.company}</p>
                                <p className="text-gray-500">{exp.duration}</p>
                                <p className="mt-2 text-gray-600">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;