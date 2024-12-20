import React from 'react';
import styled from 'styled-components';
import CircleAnimation from './CircleAnimation';

const AchievementsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  position: relative;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    li {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }

    li {
      font-size: 0.875rem;
    }
  }
`;

const Achievements = () => {
  return (
    <AchievementsSection id="achievements">
      <CircleAnimation />
      <h2>Achievements</h2>
      <ul>
        <li>SIH23 Runner-up</li>
        <li>AI and IoT Specialist</li>
        <li>Multiple Award-Winning Projects</li>
      </ul>
    </AchievementsSection>
  );
};

export default Achievements;