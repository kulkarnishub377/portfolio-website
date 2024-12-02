import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import CircleAnimation from './CircleAnimation';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #34495E;
  color: white;
  position: relative;
  perspective: 1000px;
  padding: 60px 20px; /* Add padding to create space between sections */
`;

const TextCenter = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  margin: 0 auto 1rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid white;
`;

const CircleAroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #7F8C8D;
  box-sizing: border-box;
  animation: rotate 5s linear infinite;
  box-shadow: 0 0 10px #7F8C8D, 0 0 20px #7F8C8D, 0 0 30px #7F8C8D, 0 0 40px #7F8C8D;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  max-width: 40rem;
  margin-bottom: 2rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    font-size: 1.125rem;
    max-width: 35rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 30rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    max-width: 20rem;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
    max-width: 15rem;
  }
`;

const Button = styled.a`
  background-color: #2C3E50;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  transition: background-color 0.3s, transform 0.3s, color 0.3s;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: white;
    transform: scale(1.05);
    color: #2C3E50; /* Change text color on hover for better contrast */
  }
`;

const Home = () => {
  useEffect(() => {
    gsap.fromTo(".home-text", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <HomeSection id="home">
      <CircleAnimation />
      <TextCenter>
        <ProfileImageContainer>
          <ProfileImage src="/Profile.jpg" alt="Shubham Kulkarni" className="home-text" />
          <CircleAroundImage></CircleAroundImage>
        </ProfileImageContainer>
        <Heading className="home-text">Hi, I’m Shubham Kulkarni</Heading>
        <Subheading className="home-text">AI, IoT & Data Analytics Specialist | SIH23 Runner-up | Passionate Technologist</Subheading>
        <Paragraph className="home-text">
          With a background in AI and IoT, I specialize in creating innovative solutions. My work includes award-winning projects and impactful internships. Actively seeking opportunities in AI, data analytics, and embedded systems.
        </Paragraph>
        <Button
          href="/Shub_resume.pdf"
          className="home-text"
          download
        >
          Download Resume
        </Button>
      </TextCenter>
    </HomeSection>
  );
};

export default Home;