import React from "react";
import ProfileImage from "../../../assets/profile.jpg";
import { Img } from "../../Img";
import { CTA } from "./CTA";

export const Hero = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="w-[600px] text-center">
        <div className="img-wrapper flex justify-center">
          <Img src={ProfileImage} alt="ProfileImage" rounded classExt="w-40" />
        </div>
        <h1 className="text-4xl font-extrabold mt-10">
          I do code and make content about it!
        </h1>
        <p className="mt-10 text-slate-400">
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>

        {/* Hero CTA */}
        <CTA />
      </div>
    </div>
  );
};
