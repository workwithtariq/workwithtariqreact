import React from "react";
import ProfilePic from "../../assets/profile.jpg";
import FacebookIcon from "../../assets/fb.svg";
import LinkedInIcon from "../../assets/in.svg";
import WhatsAppIcon from "../../assets/wa.svg";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import Button from "../../components/Button/Button"; // Import the reusable Button component
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

          {/* Reusable Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row md:flex-col lg:flex-row">
            <Button
              text="View Projects"
              href="/projects"
              variant="secondary" // Secondary button styling
            />
            <Button
              text="Contact Me"
              href="/contact"
              variant="primary" // Primary button styling
            />
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <SocialIcons iconSrc={FacebookIcon} url="https://facebook.com/workwithtariq/" />
            <SocialIcons iconSrc={LinkedInIcon} url="https://linkedin.com/in/workwithtariq/" />
            <SocialIcons iconSrc={WhatsAppIcon} url="https://wa.me/+8801517010100" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-start order-1 md:order-2">
        <LazyLoadImage
          src={ProfilePic}
          alt="Md Tariqul Islam"
          effect="blur"  // Optional: Adds a blur effect during lazy loading
          className="w-full h-full lg:w-96 lg:h-96 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
