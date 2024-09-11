import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional: Adds a blur effect during loading

const HomeAboutCard = ({ icon, title, lines }) => {
  return (
    <div className="flex flex-col gap-1 border border-slate-300 rounded-[32px] p-6 sm:w-1/2 md:w-full">
      {/* Card Image */}
      <div className="mx-auto">
        <LazyLoadImage
          src={icon}
          alt={`${title} Icon`}
          effect="blur" // Optional: Adds a blur effect while loading
          className="w-8"
        />
      </div>
      <h4 className="text-xl font-semibold">{title}</h4>
      {lines.map((line, index) => (
        <span key={index} className="text-gray-600">{line}</span>
      ))}
    </div>
  );
};

export default HomeAboutCard;
