import React from "react";
import ProfilePic from "../../assets/profile.jpg";
import ExperienceIcon from "../../assets/marketing.svg";
import EducationIcon from "../../assets/mail.svg";
import HomeAboutCard from "./HomeAboutCard";
import HomeSectionHeader from "./HomeSectionHeader";
import HomeAboutProfileImage from "./HomeAboutProfileImage";

const HomeAbout = () => {
  return (
    <div className="mt-40">
      {/* Section Header */}
      <HomeSectionHeader subtitle="Get to Know" title="About Me" />

      {/* HomeAbout Body */}
      <div className="flex flex-col lg:flex-row gap-8 mt-20">
        {/* Profile Section */}
        <div className="mx-auto lg:w-2/5 ">
          <HomeAboutProfileImage src={ProfilePic} alt="Profile Picture" />
        </div>

        {/* Info Section */}
        <div className="lg:w-3/5 flex flex-col gap-6 md:flex-row lg:flex-col sm:items-center">
          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-8 text-center md:w-1/2 lg:w-full">
            {/* Experience Card */}
            <HomeAboutCard
              icon={ExperienceIcon}
              title="Experience"
              lines={["1+ Years", "Full Stack Development"]}
            />

            {/* Education Card */}
            <HomeAboutCard
              icon={EducationIcon}
              title="Education"
              lines={["BSS Bachelors Final Year", "HSC Science"]}
            />
          </div>

          {/* About Text */}
          <div className="md:w-1/2 lg:w-full">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
