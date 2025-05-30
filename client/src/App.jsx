import React from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import './App.css'


const App = () => {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth scroll-smooth">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
    
  )
}

export default App
