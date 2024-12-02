import React from 'react';
import styled from 'styled-components';
import CircleAnimation from './CircleAnimation';

const EducationSection = styled.section`
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

const Education = () => {
  return (
    <EducationSection id="education">
      <CircleAnimation />
      <h2>Education</h2>
      <ul>
        <li>Bachelor of Technology in Computer Science</li>
        <li>Master of Science in Artificial Intelligence</li>
      </ul>
    </EducationSection>
  );
};

export default Education;