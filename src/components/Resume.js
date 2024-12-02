import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        <iframe
          src="/Shub_resume.pdf"
          title="Shubham Kulkarni's Resume"
          className="w-full h-96 mb-8"
        ></iframe>
        <a href="/Shub_resume.pdf" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition" download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;