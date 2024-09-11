import React from "react";
import Button from "../../components/Button/Button"; // Import your Button component

const ProjectCard = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg">
      {/* Image with corner radius */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      
      {/* Card Title */}
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      
      {/* Two outlined buttons */}
      <div className="flex space-x-4">
        <Button text="Details" href="/details" variant="secondary" />
        <Button text="Video" href="/quote" variant="secondary" />
      </div>
    </div>
  );
};

export default ProjectCard;
