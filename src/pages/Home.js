import React from "react";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import SocialsSlide from "../components/home/SocialsSlide";
import TeamsSlide from "../components/home/TeamsSlide";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <AboutSection />
      <TeamsSlide />
      <SocialsSlide />
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Send us a message and we'll get right back to you!</p>
        <form>
          <input type="text" placeholder="Name" />
          <br />
          <input type="email" placeholder="Email" />
          <br />
          <textarea placeholder="Message" />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Home;
