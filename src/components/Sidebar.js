import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    background-color: rgba(31, 41, 55, 0.7); /* Adjusted transparency */
    color: white;
    padding: 1rem;
    border-radius: 0 0.5rem 0.5rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const ListItem = styled.li`
    margin-bottom: 1rem;
    transition: transform 0.3s, filter 0.3s;

    &:hover {
        transform: scale(1.2);
        filter: brightness(200%);
    }
`;

const Icon = styled.div`
    font-size: 24px;
    transition: transform 0.3s, color 0.3s;

    &:hover {
        color: #FFD700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
    }
`;

const Sidebar = () => (
    <SidebarContainer>
        <ul>
            <ListItem>
                <a href="https://www.linkedin.com/in/shubhkulk21/" target="_blank" rel="noopener noreferrer">
                    <Icon><FaLinkedin /></Icon>
                </a>
            </ListItem>
            <ListItem>
                <a href="https://github.com/kulkarnishub377" target="_blank" rel="noopener noreferrer">
                    <Icon><FaGithub /></Icon>
                </a>
            </ListItem>
            <ListItem>
                <a href="https://www.instagram.com/kulkarni_shub/" target="_blank" rel="noopener noreferrer">
                    <Icon><FaInstagram /></Icon>
                </a>
            </ListItem>
            <ListItem>
                <a href="https://wa.me/918308003684" target="_blank" rel="noopener noreferrer">
                    <Icon><FaWhatsapp /></Icon>
                </a>
            </ListItem>
            <ListItem>
                <a href="mailto:kulkarnishub377@gmail.com">
                    <Icon><FaEnvelope /></Icon>
                </a>
            </ListItem>
            <ListItem>
                <a href="tel:+918308003684">
                    <Icon><FaPhone /></Icon>
                </a>
            </ListItem>
        </ul>
    </SidebarContainer>
);

export default Sidebar;