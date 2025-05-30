import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-4 bg-gray-50 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Spotify Clone Project */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Spotify Clone (MERN Stack)</h3>
          <p>
            Built a full-featured Spotify clone with MERN stack. I handled both frontend and backend development. 
            On the frontend, I designed responsive user interfaces with React and Tailwind CSS, mimicking Spotify's sleek design. 
            On the backend, I implemented playlist management, and song streaming with Node.js, Express, and MongoDB,where the user can add,delete song or album. 
            {/* Although it's not currently on GitHub, it showcases my skills in building production-grade applications. */}
          </p>
          {/* <p className="mt-2 italic text-gray-600">Note: ot on GitHub.</p> */}
        </div>

        {/* Notes App Project */}
         <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Notes App (MERN Stack)</h3>
          <p>
            Developed a fully functional Notes App where users can create and delete notes in real time. The frontend uses React and Tailwind CSS for a clean and responsive user interface, 
            while the backend utilizes Node.js, Express, and MongoDB to handle authentication, API routes, and data storage. Deployed on Vercel, it offers a seamless note-taking experience with persistent storage.
          </p>
          <a 
            href="https://github.com/Sskarale/Automatic_webpage_builder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block mt-2"
          >
            View on GitHub
          </a>
          <a 
            href="https://mini-notes-app-psi.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:underline block mt-1"
          >
            Live Site
          </a>
        </div>


      </div>
    </section>
  );
}

export default Projects;
