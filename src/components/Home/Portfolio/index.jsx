import React from "react";
import { Button } from "../../Button";
import { Img } from "../../Img";
import Project1 from "../../../assets/p1.webp";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {
  return (
    <div className="mt-40">
      <h2 className="text-5xl text-center tracking-wide">Portfolio</h2>
      {/* // Portfolio item container */}
      <PortfolioItem
        title="Re-Design For WEb designer Portfolio"
        tags={["Wordpress", "Tutor"]}
        description=" It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout."
      />
      
      <PortfolioItem
        title="Re-Design For WEb designer Portfolio"
        tags={["Wordpress", "Tutor"]}
        description=" It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout."
      />
    </div>
  );
};
