import React from "react";
import ProfilePic from "../../assets/profile.jpg";
import FacebookIcon from "../../assets/fb.svg";
import SocialIcons from "../../components/SocialIcons/SocialIcons";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center max-w-[1280px] mx-auto py-16 px-4 gap-6 md:gap-20">
      {/* Left Section */}
      <div className="md:w-1/2 text-center order-2 md:order-1">
        <div className="max-w-fit ml-auto">
          <h1 className="text-3xl font-Poppins">Hi, I'm</h1>
          <h2 className="text-5xl font-bold mt-2">Md Tariqul Islam</h2>
          <h3 className="text-2xl text-gray-600 mt-4">
            Full-stack JavaScript Developer
          </h3>

          {/* Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/projects"
              className="px-6 py-3 border-2 border-black text-black rounded-full transition-all hover:bg-black hover:text-white"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-full transition-all hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <SocialIcons src={FacebookIcon} />
            <SocialIcons src={FacebookIcon} />
            <SocialIcons src={FacebookIcon} />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-start order-1 md:order-2">
        <img
          src={ProfilePic}
          alt="Md Tariqul Islam"
          className="w-full h-full lg:w-96 lg:h-96 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
