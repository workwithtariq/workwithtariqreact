import React from "react";
import HomeSectionHeader from "./HomeSectionHeader";
import ProjectCardSection from "./ProjectCardSection";

const HomeProjects = () => {
  return (
    <div className="mt-40">
      {/* Header */}
      <div>
        <HomeSectionHeader subtitle="Browse My Recent" title="Projects" />
      </div>
      {/* Body */}
      <div>
        <ProjectCardSection />
      </div>
    </div>
  );
};

export default HomeProjects;
