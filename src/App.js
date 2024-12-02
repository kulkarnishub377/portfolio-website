import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
      <Projects />
      <Certifications />
      <Experience />
      <Skills />
      <Contact />
      {/* Other sections will go here */}
    </div>
  );
}

export default App;
