import React from "react";
import HomeSectionHeader from "./HomeSectionHeader";
import SkillsContainer from "./SkillsContainer";
import CheckIcon from "../../assets/checkmark.png"; // Your checkmark icon

const HomeExperience = () => {
  // Define your skill sets for reusability
  const frontendSkills = [
    { iconSrc: CheckIcon, skill: "HTML", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "CSS", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "JavaScript", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "React.js", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "Next.js", level: "Intermdiate" },
    { iconSrc: CheckIcon, skill: "Tailwind CSS", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "Daisy UI", level: "Intermdiate" },
    { iconSrc: CheckIcon, skill: "Material UI", level: "Intermdiate" },
    { iconSrc: CheckIcon, skill: "Elementor", level: "Intermdiate" },
  ];

  const backendSkills = [
    { iconSrc: CheckIcon, skill: "Node.js", level: "Intermediate" },
    { iconSrc: CheckIcon, skill: "Express.js", level: "Intermediate" },
    { iconSrc: CheckIcon, skill: "MongoDB", level: "Basic" },
    { iconSrc: CheckIcon, skill: "REST APIs", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "Django", level: "Beginner" },
    { iconSrc: CheckIcon, skill: "MySQL", level: "Beginner" },
  ];

  const programmingSkills = [
    { iconSrc: CheckIcon, skill: "JavaScript", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "Java", level: "Basic" },
    { iconSrc: CheckIcon, skill: "Python", level: "Basic" },
    { iconSrc: CheckIcon, skill: "C", level: "Basic" },
    { iconSrc: CheckIcon, skill: "C#", level: "Beginner" },
 
  ];

  const marketingSkills = [
    { iconSrc: CheckIcon, skill: "Google Ads", level: "Intermediate" },
    { iconSrc: CheckIcon, skill: "Facebook Ads", level: "Basic" }, 
    { iconSrc: CheckIcon, skill: "Marketing Funnel", level: "Basic" }, 
  ];

  return (
    <section className="mt-40">
      <HomeSectionHeader subtitle="Explore My" title="Experience" />
      {/* Experience Body 1st section */}
      <div className="flex flex-col sm:flex-row gap-10 mt-16">
        {/* Left: Frontend Skills */}
        <SkillsContainer title="FrontEnd Development" skills={frontendSkills} />
        {/* Right: Backend Skills */}
        <SkillsContainer title="BackEnd Development" skills={backendSkills} />
      </div>
      {/* Experience Body 2nd section*/}
      <div className="flex flex-col sm:flex-row gap-10 mt-10">
        {/* Left: Frontend Skills */}
        <SkillsContainer title="Programming" skills={programmingSkills} />
        {/* Right: Backend Skills */}
        <SkillsContainer title="Digital Marketing" skills={marketingSkills} />
      </div>
    </section>
  );
};

export default HomeExperience;
