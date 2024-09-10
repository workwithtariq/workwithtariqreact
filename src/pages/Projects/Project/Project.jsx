import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/dist";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "A brief description of Project One. It includes details about the technologies used and the problem it solves.",
    videoUrl: "https://www.youtube.com/embed/your-video-id-1",
    caseStudy: "Detailed case study for Project One.",
    additionalInfo: ["Feature 1", "Feature 2", "Feature 3"],
    imageUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A brief description of Project Two. It highlights the key features and functionalities of the project.",
    videoUrl: "https://www.youtube.com/embed/your-video-id-2",
    caseStudy: "Detailed case study for Project Two.",
    additionalInfo: ["Feature 1", "Feature 2", "Feature 3"],
    imageUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A brief description of Project Three. This project focuses on specific technologies or approaches used.",
    videoUrl: "https://www.youtube.com/embed/your-video-id-3",
    caseStudy: "Detailed case study for Project Three.",
    additionalInfo: ["Feature 1", "Feature 2", "Feature 3"],
    imageUrl: "https://via.placeholder.com/600x400",
  },
  // Add more projects here
];

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div>
        <div className="flex justify-center mt-12">
          <div className="text-white bg-red-600 inline-block text-2xl p-4 rounded-lg text-center">
            Project not found
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link to={"/projects"} className="bg-green-300 p-4 rounded-lg">All Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12">
      {/* Project Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {project.title}
        </h1>
        <p className="text-xl text-gray-700 mt-2">{project.description}</p>
      </header>

      {/* Project Details */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Project Overview
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Detailed description of the project, including the problem it solves,
          technologies used, and key features. Explain the objectives and
          outcomes.
        </p>
      </section>

      {/* Video Explanation */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Project Video
        </h2>
        <div className="relative pb-9/16">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={project.videoUrl}
            frameBorder="0"
            allowFullScreen
            title="Project Explanation"
          ></iframe>
        </div>
      </section>

      {/* Case Study */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Case Study
        </h2>
        <p className="text-gray-600 leading-relaxed">{project.caseStudy}</p>
      </section>

      {/* Additional Information */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Additional Information
        </h2>
        <ul className="list-disc pl-6 text-gray-600">
          {project.additionalInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Project;
