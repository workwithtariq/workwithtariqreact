import React from "react";
import Hero from "../../pages/Home/Hero"; // Adjust path as needed
import HomeAbout from "./HomeAbout";
import HomeExperience from "./HomeExperience";

const Home = () => {
  return (
    <div className="mb-40">
      <Hero />
      <HomeAbout />
      <HomeExperience />
      {/* Other sections of the Home page */}
    </div>
  );
};

export default Home;
