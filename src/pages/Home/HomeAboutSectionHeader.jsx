import React from "react";

const HomeAboutSectionHeader = ({ subtitle, title }) => {
  return (
    <div className="text-center">
      <span className="text-gray-500">{subtitle}</span>
      <h2 className="text-5xl font-bold text-gray-900">{title}</h2>
    </div>
  );
};

export default HomeAboutSectionHeader;
