import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { gsap } from 'gsap';
import emailjs from 'emailjs-com';
import CircleAnimation from './CircleAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    gsap.fromTo(".contact-form, .social-links", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_zlqzv4e', 'template_kgcs759', formData, 'GYKBWndL1gSiRnVdJ')
      .then((result) => {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        setStatus('Failed to send message, please try again.');
      });
  };

  return (
    <section id="contact" className="py-20 text-white relative">
      <CircleAnimation />
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact/Hire me</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 mb-8 md:mb-0 contact-form text-gray-900">
            <div className="mb-4 relative">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500" placeholder="Name" required />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
            </div>
            <div className="mb-4 relative">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500" placeholder="Email" required />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
            </div>
            <div className="mb-4 relative">
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500" placeholder="Phone Number" />
              <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone Number</label>
            </div>
            <div className="mb-4 relative">
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500" placeholder="Subject" required />
              <label htmlFor="subject" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Subject</label>
            </div>
            <div className="mb-4 relative">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="peer h-24 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500" placeholder="Message" required></textarea>
              <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Send Message</button>
            {status && <p className="mt-4 text-center">{status}</p>}
          </form>
          <div className="flex flex-col items-center md:ml-8 social-links">
            <h3 className="text-xl font-bold mb-4">Connect with me</h3>
            <ul className="flex space-x-4">
              <li><a href="https://www.linkedin.com/in/shubhkulk21/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a></li>
              <li><a href="https://github.com/kulkarnishub377" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a></li>
              <li><a href="https://www.instagram.com/kulkarni_shub/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a></li>
              <li><a href="https://wa.me/918308003684" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a></li>
              <li><a href="mailto:kulkarnishub377@gmail.com"><FaEnvelope size={24} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;