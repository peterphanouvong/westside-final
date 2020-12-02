import React from "react";

const AboutSection = () => {
  return (
    <div className="about-section" id="about-section">
      <div className="about-two about-part">
        <div className="abt-content ">
          <h3>For all players at any skill level</h3>
          <p>
            From beginners to elite players, westside has your back. We aim to
            promote unity in the community through our sport.
          </p>
        </div>
        <div className="abt-img skill-level-img"></div>
      </div>
      <div className="about-one about-part">
        <div className="abt-content">
          <h3>South West Sydney's volleyball hub</h3>
          <p>
            Come and find us in the area. Play with us at Fairfield Leisure
            Centre, Cabramatta PCYC and Minto Leisure Centre.
          </p>
        </div>
        <div className="abt-img hub-img"></div>
      </div>
      <div className="about-two about-part">
        <div className="abt-content">
          <h3>Play how you want to play</h3>
          <p>
            Whether you want to play reps, develop your skills or just play for
            fun, Westside caters to you! Join in on the action.
          </p>
        </div>
        <div className="abt-img play-img"></div>
      </div>
    </div>
  );
};

export default AboutSection;
