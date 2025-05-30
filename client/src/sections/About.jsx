import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section id="about" className="max-w-3xl mx-auto py-24 px-4 text-center scroll-mt-20">
      <h2 className="text-4xl font-bold mb-10 flex items-center justify-center">
        <span className="mr-2">👤</span> About <span className="text-purple-600 ml-2">Me</span>
      </h2>

      <h3 className="text-2xl font-bold mb-2">I'm Rohan Ummalla</h3>

      <p className="text-blue-700 font-semibold mb-4">
        <span style={{ width: 'auto', height: 'auto' }}>
          <TypeAnimation
            sequence={[
              '',
              500,
              'Tech Enthusiast',
              1000,
              '',
              500,
              'MERN Full Stack Developer',
              1000,
              '',
              500,
              'Problem Solver',
              1000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '20px', display: 'inline-block', color: '#f27f3d', fontWeight: 'bolder' }}
            repeat={Infinity}
          />
        </span>
      </p>

      <p className="mb-4">
        I'm a passionate and results-driven Full Stack Developer with a strong focus on the MERN stack (MongoDB, Express.js, React, Node.js). I specialize in building dynamic, responsive web applications, and have hands-on experience with REST APIs, state management (Redux), and backend logic. I thrive on crafting seamless user experiences, writing clean code, and continuously expanding my technical skill set. Let's collaborate to bring innovative ideas to life!
      </p>


      <p className="mb-2">
        <span className="text-blue-600 font-semibold">Email</span>: ummallarohan123@gmail.com
      </p>

      <p className="mb-6">
        <span className="text-blue-600 font-semibold">Place</span>: Bangalore, India
      </p>

      <a
        href="/Rohan_Fresher-2.pdf"
        className="bg-blue-700 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded-lg shadow"
        download
        title='Download Resume'
      >
        Resume ›
      </a>
    </section>
  );
};

export default About;