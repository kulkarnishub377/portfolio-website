import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Sidebar = () => {
    const sidebarStyle = {
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-80%)',
        left: 0,
        backgroundColor: 'rgba(31, 41, 55, 0.8)', // bg-gray-800 bg-opacity-80
        color: 'white',
        padding: '1rem',
        borderRadius: '0 0.5rem 0.5rem 0',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    };

    const listItemStyle = {
        marginBottom: '1rem',
        transition: 'opacity 0.3s'
    };

    const iconStyle = {
        fontSize: '24px'
    };

    return (
        <div style={sidebarStyle}>
            <ul>
                <li style={listItemStyle} className="hover:opacity-75">
                    <a href="https://www.linkedin.com/in/shubhkulk21/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={iconStyle} />
                    </a>
                </li>
                <li style={listItemStyle} className="hover:opacity-75">
                    <a href="https://github.com/kulkarnishub377" target="_blank" rel="noopener noreferrer">
                        <FaGithub style={iconStyle} />
                    </a>
                </li>
                <li style={listItemStyle} className="hover:opacity-75">
                    <a href="https://www.instagram.com/kulkarni_shub/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={iconStyle} />
                    </a>
                </li>
                <li style={listItemStyle} className="hover:opacity-75">
                    <a href="https://wa.me/918308003684" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp style={iconStyle} />
                    </a>
                </li>
                <li style={listItemStyle} className="hover:opacity-75">
                    <a href="mailto:kulkarnishub377@gmail.com">
                        <FaEnvelope style={iconStyle} />
                    </a>
                </li>
                <li style={listItemStyle} className="hover:opacity-75">
                    <a href="tel:+918308003684">
                        <FaPhone style={iconStyle} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;