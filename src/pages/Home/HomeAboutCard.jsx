import React from "react";

const HomeAboutCard = ({ icon, title, lines }) => {
  return (
    <div className="flex flex-col gap-1 border border-slate-300 rounded-[32px] p-6 sm:w-1/2 md:w-full">
      {/* Card Image */}
      <div className="mx-auto">
        <img src={icon} className="w-8" alt={`${title} Icon`} />
      </div>
      <h4 className="text-xl font-semibold">{title}</h4>
      {lines.map((line, index) => (
        <span key={index} className="text-gray-600">{line}</span>
      ))}
    </div>
  );
};

export default HomeAboutCard;
