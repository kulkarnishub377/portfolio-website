import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ScrollButton = styled.button`
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    background-color: #3182ce;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.3s;
    z-index: 1000;
    animation: ${fadeIn} 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #2b6cb0;
        transform: scale(1.1);
    }

    &:focus {
        outline: none;
    }
`;

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <ScrollButton onClick={scrollToTop} style={{ display: isVisible ? 'flex' : 'none' }}>
            <FaArrowUp />
        </ScrollButton>
    );
};

export default ScrollToTop;