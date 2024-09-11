import React from "react";

const HomeSectionHeader = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-16">
      <span className="text-lg text-gray-500">{subtitle}</span>
      <h2 className="text-5xl font-bold mt-8">{title}</h2>
    </div>
  );
};

export default HomeSectionHeader;
