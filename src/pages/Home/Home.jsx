import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../pages/Home/Hero"; // Adjust path as needed
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeExperience from "./HomeExperience";
import HomeProjects from "./HomeProjects";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <HomeAbout />
      <HomeExperience />
      <HomeProjects />
      <HomeContact />
      <Footer />
      {/* Other sections of the Home page */}
    </div>
  );
};

export default Home;
