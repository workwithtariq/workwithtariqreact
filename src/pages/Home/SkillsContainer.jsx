import React from "react";
import PropTypes from "prop-types";
import SkillCard from "./SkillCard"; // Assuming the path is correct

const SkillsContainer = ({ title, skills, className = "" }) => {
  return (
    <div className={`skill-container ${className}`}>
      <h3 className="text-2xl font-semibold text-slate-600 text-center ">
        {title}
      </h3>
      {/* Skills Container */}
      <div className="flex flex-wrap gap-10 justify-around mt-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            iconSrc={skill.iconSrc}
            skill={skill.skill}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
};

SkillsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      iconSrc: PropTypes.string.isRequired,
      skill: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default SkillsContainer;
