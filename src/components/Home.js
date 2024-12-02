import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    gsap.fromTo(".home-text", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
  }, []);

  const styles = {
    section: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #4299e1, #9f7aea)',
      color: 'white',
      overflow: 'hidden', // Ensure the animation doesn't overflow
    },
    textCenter: {
      textAlign: 'center',
      position: 'relative',
    },
    circleAnimation: {
      position: 'absolute',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 10%)',
      backgroundSize: '50px 50px',
      animation: 'move 10s linear infinite',
      zIndex: -1,
    },
    profileImageContainer: {
      position: 'relative',
      width: '8rem',
      height: '8rem',
      margin: '0 auto 1rem',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adjusted glossy effect
      border: '2px solid white', // Added border for better visibility
    },
    circleAroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '2px solid white',
      boxSizing: 'border-box',
      animation: 'rotate 5s linear infinite',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    subheading: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
    },
    paragraph: {
      textAlign: 'center',
      maxWidth: '40rem',
      marginBottom: '2rem',
    },
    button: {
      backgroundColor: 'white',
      color: '#4a5568',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      transition: 'background-color 0.3s',
      textDecoration: 'none', // Ensure the link looks like a button
    },
    buttonHover: {
      backgroundColor: '#e2e8f0',
    },
    '@keyframes move': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
    '@keyframes rotate': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor;
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = styles.button.backgroundColor;
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.textCenter}>
        <div style={styles.circleAnimation}></div>
        <div style={styles.profileImageContainer}>
          <img src="/Profile.jpg" alt="Shubham Kulkarni" style={styles.profileImage} />
          <div style={styles.circleAroundImage}></div>
        </div>
        <h1 style={styles.heading}>Hi, I’m Shubham Kulkarni</h1>
        <p style={styles.subheading}>AI, IoT & Data Analytics Specialist | SIH23 Runner-up | Passionate Technologist</p>
        <p style={styles.paragraph}>
          With a background in AI and IoT, I specialize in creating innovative solutions. My work includes award-winning projects and impactful internships. Actively seeking opportunities in AI, data analytics, and embedded systems.
        </p>
        <a
          href="/Shub_resume.pdf"
          style={styles.button}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;