import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12">
      {/* Introduction Section */}
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Hi, I'm Tariq, a passionate Full-Stack JavaScript Developer with a knack for creating dynamic and responsive web applications that solve real-world problems.
        </p>
      </section>
      
      {/* Biography Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Biography</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I started my journey in web development with a focus on both front-end and back-end technologies. Over the years, I've honed my skills in React, Node.js, and other technologies, building applications that are not only functional but also user-friendly.
        </p>
      </section>
      
      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Skills & Achievements</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">React.js</h3>
            <p className="text-gray-700">Experienced in building interactive user interfaces with React.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Node.js</h3>
            <p className="text-gray-700">Skilled in developing server-side applications and RESTful APIs.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">JavaScript</h3>
            <p className="text-gray-700">Proficient in writing clean and efficient JavaScript code for various applications.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">HTML & CSS</h3>
            <p className="text-gray-700">Expert in crafting responsive designs using HTML and CSS.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Design</h3>
            <p className="text-gray-700">Experience in creating designs that work across various devices and screen sizes.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
