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
    right: 2rem;
    background-color: #2C3E50;
    color: #ECF0F1;
    border: none;
    border-radius: 50%;
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.3s;
    z-index: 1000;
    animation: ${fadeIn} 0.5s;

    &:hover {
        background-color: #34495E;
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
        <ScrollButton onClick={scrollToTop} style={{ display: isVisible ? 'inline' : 'none' }}>
            <FaArrowUp />
        </ScrollButton>
    );
};

export default ScrollToTop;