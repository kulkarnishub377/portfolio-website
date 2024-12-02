import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CircleAnimationWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 10%, transparent 10%);
  background-size: 50px 50px;
  z-index: -1;
  transform: rotateX(45deg) rotateY(45deg);
  transition: transform 0.1s;
`;

const CircleAnimation = () => {
  const circleAnimationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const rotateX = (clientY / innerHeight - 0.5) * 30;
      const rotateY = (clientX / innerWidth - 0.5) * 30;
      if (circleAnimationRef.current) {
        circleAnimationRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <CircleAnimationWrapper ref={circleAnimationRef}></CircleAnimationWrapper>;
};

export default CircleAnimation;