import React from "react";
import Hero from "../../pages/Home/Hero"; // Adjust path as needed
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeExperience from "./HomeExperience";
import HomeProjects from "./HomeProjects";

const Home = () => {
  return (
    <div className="mb-40">
      <Hero />
      <HomeAbout />
      <HomeExperience />
      <HomeProjects />
      <HomeContact />
      {/* Other sections of the Home page */}
    </div>
  );
};

export default Home;
