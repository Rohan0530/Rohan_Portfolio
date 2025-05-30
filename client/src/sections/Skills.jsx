import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, label: "ReactJS" },
  { icon: <FaNodeJs className="text-green-500" />, label: "NodeJS" },
  { icon: <SiExpress className="text-gray-200" />, label: "ExpressJS" }, 
  { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
  { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind CSS" },
  { icon: <FaGitAlt className="text-orange-400" />, label: "Git" },
  { icon: <FaGithub className="text-white" />, label: "GitHub" },
  { icon: <FaCode className="text-purple-500" />, label: "C#" },        
  { icon: <FaCode className="text-purple-600" />, label: "ASP.NET" }, 
  { icon: <BiLogoVisualStudio className="text-blue-500" />, label: "VS Code" },
];


const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-r from-purple-800 to-indigo-900 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 flex justify-center items-center">
          <span className="mr-2">💻</span> Skills <span className="text-yellow-400 ml-2">& Abilities</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 " >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:scale-105 transition-transform rounded-xl p-4 flex flex-col items-center shadow-md cursor-pointer"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-white">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
