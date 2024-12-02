import React, { useState } from 'react';
import { FaHome, FaProjectDiagram, FaCertificate, FaBriefcase, FaFileAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      window.location.hash = '#home';
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-opacity-75 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Shubham Kulkarni</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}>
          <li className="p-2 md:p-0"><a href="#home" className="hover:underline flex items-center"><FaHome className="mr-2" /> Home</a></li>
          <li className="p-2 md:p-0"><a href="#projects" className="hover:underline flex items-center"><FaProjectDiagram className="mr-2" /> Projects</a></li>
          <li className="p-2 md:p-0"><a href="#certifications" className="hover:underline flex items-center"><FaCertificate className="mr-2" /> Certifications</a></li>
          <li className="p-2 md:p-0"><a href="#experience" className="hover:underline flex items-center"><FaBriefcase className="mr-2" /> Experience</a></li>
          <li className="p-2 md:p-0"><a href="#resume" className="hover:underline flex items-center"><FaFileAlt className="mr-2" /> Resume</a></li>
          <li className="p-2 md:p-0"><a href="#contact" className="hover:underline flex items-center"><FaEnvelope className="mr-2" /> Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;