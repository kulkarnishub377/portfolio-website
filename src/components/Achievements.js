import React from 'react';

const achievements = [
    {
        title: "SIH23 Runner-up",
        description: "Secured runner-up position in Smart India Hackathon 2023."
    },
    {
        title: "Best Paper Award",
        description: "Received the best paper award at the International Conference on AI."
    },
    {
        title: "Top Coder",
        description: "Ranked among the top 10 coders in a national coding competition."
    },
    {
        title: "Open Source Contributor",
        description: "Contributed to several open source projects on GitHub."
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                            <p className="text-gray-700">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;