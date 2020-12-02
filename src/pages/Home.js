import React from "react";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import SocialsSlide from "../components/home/SocialsSlide";
import TeamsSlide from "../components/home/TeamsSlide";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <AboutSection />
      <TeamsSlide />
      <SocialsSlide />
      <Contact />
    </div>
  );
};

export default Home;
