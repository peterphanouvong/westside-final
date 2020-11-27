import React from "react";
import SocialsSlide from "../components/home/SocialsSlide";
import TeamsSlide from "../components/home/TeamsSlide";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>join the whanau</h1>
        <p>Be a part of the Westside fam</p>
      </div>

      <div className="about-section">
        <div className="about-two about-part">
          <div className="abt-img"></div>
          <div className="abt-content">
            <h3>For all players at any skill level</h3>
            <p>
              From beginners to elite players, westside has your back. We aim to
              promote unity in the community through our sport.
            </p>
          </div>
        </div>
        <div className="about-one about-part">
          <div className="abt-content">
            <h3>South West Sydney's volleyball hub</h3>
            <p>
              Come and find us in the area. Play with us at Fairfield Leisure
              Centre, Cabramatta PCYC and Minto Leisure Centre.
            </p>
          </div>
          <div className="abt-img"></div>
        </div>
        <div className="about-two about-part">
          <div className="abt-img"></div>
          <div className="abt-content">
            <h3>Play how you want to play</h3>
            <p>
              Whether you want to play reps, develop your skills or just play
              for fun, Westside caters to you!
            </p>
          </div>
        </div>
      </div>

      <TeamsSlide />
      <SocialsSlide />
    </div>
  );
};

export default Home;
