import React from "react";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Home/Experience";
import { Header } from "../components/Home/Header/Header";
import { Hero } from "../components/Home/Hero";
import { Portfolio } from "../components/Home/Portfolio";

const Home = () => {
  return (
    <>
      <Header />
      <div className="body-container">
      <Hero />
      <Experience />
      <Portfolio />
      </div>
      <Footer />
    </>
  );
};

export default Home;
