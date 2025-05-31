import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaEnvelope } from "react-icons/fa";
import pic from '../sections/pic.jpg'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';  

const Home = () => {
  return (
    <section id="home" className="relative h-screen bg-white flex flex-col justify-center items-center text-center px-4 scroll-mt-20" style={{ background: 'linear-gradient(to right, #a8edea, #fed6e3)' }}>
      
      <motion.img 
        src={pic} 
        alt="Rohan" 
        className="w-[250px] h-[250px] mb-6 shadow-lg object-cover rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}      
        animate={{ opacity: 1, scale: 1 }}       
        transition={{ duration: 2 }}              
      />

      <h1 className="text-4xl md:text-6xl font-bold">
        Hi There, I'm <span className="text-orange-500 whitespace-nowrap">Rohan Ummalla</span>
      </h1>
      <h2 className="text-lg md:text-2xl mt-4">
        <strong>I'm a</strong> <span> </span>
        <span style={{ width: 'auto', height: 'auto' }}>
          <TypeAnimation
            sequence={[
              'Full Stack Developer.',
              1000,
              '',
              500,
              'React Enthusiast.',
              1000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '20px', display: 'inline-block', color: '#f27f3d', fontWeight: 'bolder' }}
            repeat={Infinity}
          />
        </span>
      </h2>

      <a href="#about" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md">
        About Me
      </a>

      <div className="flex justify-center space-x-4 mt-6 text-3xl text-gray-600">
        <a href="https://www.linkedin.com/in/rohan-ummalla-0a912b313/" target="_blank" rel="noopener noreferrer" title='linkedin'><FaLinkedin /></a>
        <a href="https://github.com/Rohan0530" title='github' target="_blank"><FaGithub /></a>
        <a href="https://mail.google.com/mail/?view=cm&to=ummallarohan123@gmail.com" target='_blank' title='gmail'><FaEnvelope /></a>
      </div>
    </section>
  )
}

export default Home
