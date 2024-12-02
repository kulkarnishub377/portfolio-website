import React, { useState } from 'react';
import { FaHome, FaEnvelope, FaProjectDiagram, FaCertificate, FaBriefcase, FaTrophy, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav className="navbar">
      <Container className="container">
        <Logo className="logo">Shubham Kulkarni</Logo>
        <MenuIcon className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavLinks className={`nav-links ${isOpen ? 'open' : ''}`}>
          {[
            { href: "#home", icon: <FaHome className="icon" />, label: "Home" },
            { href: "#projects", icon: <FaProjectDiagram className="icon" />, label: "Projects" },
            { href: "#certifications", icon: <FaCertificate className="icon" />, label: "Certifications" },
            { href: "#experience", icon: <FaBriefcase className="icon" />, label: "Experience" },
            { href: "#achievements", icon: <FaTrophy className="icon" />, label: "Achievements" },
            { href: "#contact", icon: <FaEnvelope className="icon" />, label: "Contact" }
          ].map((item, index) => (
            <NavItem key={index}><a href={item.href}>{item.icon} {item.label}</a></NavItem>
          ))}
        </NavLinks>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.6); /* Gray with transparency */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #f39c12; /* Attractive color */
  font-family: 'Pacifico', cursive; /* Calligraphy font */
  filter: brightness(150%); /* Increase brightness */

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    display: none;

    &.open {
      display: flex;
    }

    li {
      margin: 1rem 0;
    }
  }
`;
const NavItem = styled.li`
  position: relative;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    transition: color 0.3s ease, transform 0.3s ease, filter 0.3s ease;
    padding: 0.5rem 0;
    position: relative;

    &:hover {
      color: #f39c12;
      transform: scale(1.2);
      filter: brightness(200%);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #f39c12;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }

    .icon {
      margin-right: 0.5rem;
      transition: color 0.3s ease;
    }

    &:hover .icon {
      color: #f39c12;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.9rem;
    }
  }
`;

export default Navbar;
