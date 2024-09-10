import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One. It includes details about the technologies used and the problem it solves.',
    link: '#', // This can be removed since the link is handled by routing now
    imageUrl: 'https://via.placeholder.com/600x400',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two. It highlights the key features and functionalities of the project.',
    link: '#', // This can be removed since the link is handled by routing now
    imageUrl: 'https://via.placeholder.com/600x400',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three. This project focuses on specific technologies or approaches used.',
    link: '#', // This can be removed since the link is handled by routing now
    imageUrl: 'https://via.placeholder.com/600x400',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-12">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="inline-block px-4 py-2 bg-black text-white text-center rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
