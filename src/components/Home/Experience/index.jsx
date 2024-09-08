import React from "react";
import { Img } from "../../Img";
import JS from "../../../assets/js.svg";
import NodeJS from "../../../assets/nodejs.svg";
import ReactJS from "../../../assets/react.svg";
import Html from "../../../assets/html5.svg";
import CSS from "../../../assets/css3.svg";
import Adwords from "../../../assets/adwords.svg";
import Marketing from "../../../assets/marketing.svg";

export const Experience = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-base uppercase tracking-wide">Experience with</h2>
      <div className="experience-img flex flex-wrap justify-center gap-4 wrap mt-6">
        <Img src={JS} classExt="w-10" />
        <Img src={NodeJS} classExt="w-10" />
        <Img src={ReactJS} classExt="w-10" />
        <Img src={Html} classExt="w-10" />
        <Img src={CSS} classExt="w-10" />
        <Img src={Adwords} classExt="w-10" />
        <Img src={Marketing} classExt="w-10" />
      </div>
    </div>
  );
};
