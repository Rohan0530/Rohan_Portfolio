import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [done, setDone] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://rohan-portfolio-rd2j.onrender.com/contact', formData);
      toast.success('Message sent successfully!');
      setDone(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="bg-orange-50 py-24 px-4 scroll-mt-20">
      <ToastContainer />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Contact Information</h2>
          <div className="space-y-2 text-gray-800">
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-xl" /> Bangalore, India</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-xl" /> +91 6300728475</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-xl" /> <a href="mailto:ummallarohan123@gmail.com" className="text-blue-600">ummallarohan123@gmail.com</a></p>
            <p className="flex items-center gap-2"><FaLinkedin className="text-xl" /> <a href="https://www.linkedin.com/in/rohan-ummalla-0a912b313/" target="_blank" className="text-blue-600">linkedin.com/in/rohan-ummalla-0a912b313</a></p>
            <p className="flex items-center gap-2"><FaGithub className="text-xl" /> <a href="https://github.com/Rohan0530" target="_blank" className="text-blue-600">github.com/Rohan0530</a></p>
          </div>
        </div>

        <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6 w-full">
          
          {done ? (
            <p className="text-green-600 font-bold text-center">Thank you for connecting with me!</p>
          ) : (
            <>
            <h3 className="text-2xl font-semibold mb-4">Send me a message!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md"
              >
                Send
              </button>
            </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
