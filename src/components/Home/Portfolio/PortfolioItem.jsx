import React from "react";
import { Button } from "../../Button";
import { Img } from "../../Img";
import Project1 from "../../../assets/p1.webp";

export const PortfolioItem = ({ title, tags, description, btnText }) => {
  return (
    <div className="portfolio-item-container flex gap-8 max-h-96 overflow-hidden p-8 mt-20 border border-pink-400 rounded-lg ">
      {/* Item text */}
      <div className="item-text w-1/2 flex flex-col gap-6">
        {/* Heading */}
        <h2 className="text-3xl">{title}</h2>
        {/* Tags */}
        <div className="tag-container flex gap-4">
          <span className="bg-slate-300 text-black px-4 py-2 rounded-lg inline-block">
            {tags[0]}
          </span>
          <span className="bg-slate-300 text-black px-4 py-2 rounded-lg inline-block">
            {tags[1]}
          </span>
        </div>

        {/* Description */}
        <p>{description}</p>

        {/* Button */}
        <div>
          <Button text={btnText || "View Project"} />
        </div>
      </div>
      {/* item image */}
      <div className="item-img w-1/2">
        <Img src={Project1} classExt="rounded-lg" />
      </div>
    </div>
  );
};
