import React from "react";
import ProjectCard from "./ProjectCard"; // Import ProjectCard component
import ProfilePic from "../../assets/profile.jpg";

const ProjectCardSection = () => {
  // Array of project cards data
  const projectData = [
    {
      imageSrc: ProfilePic,
      title: "Project One",
    },
    {
      imageSrc: ProfilePic,
      title: "Project Two",
    },
    {
      imageSrc: ProfilePic,
      title: "Project Three",
    },

    // Add more cards as needed
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <ProjectCard imageSrc={project.imageSrc} title={project.title} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCardSection;
