import React, { useState } from 'react'
// import { HiMenu, HiX } from "react-icons/hi";
import Rlogo from './Rlogo.jpg'


const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4 fixed top-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold md:block hidden">Rohan</h1>
          <img
            src={Rlogo}
            alt="Rohan"
            className="w-10 h-10 md:hidden block rounded-full"
          />
        </div>
        <ul className="flex flex-wrap items-center gap-4 overflow-x-auto text-sm md:text-base">
          <li><a href="#home" className="hover:text-yellow-400 whitespace-nowrap">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 whitespace-nowrap">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 whitespace-nowrap">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 whitespace-nowrap">Skills</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 whitespace-nowrap">Contact</a></li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar
