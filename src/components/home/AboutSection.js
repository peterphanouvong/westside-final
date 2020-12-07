import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

const AboutSection = () => {
  const aboutSectionRef = useRef(null);
  const intersection = useIntersection(aboutSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      duration: 1.2,
      height: 0,
      ease: "Power4.easeOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  !intersection || (!(intersection.intersectionRatio < 0.5) && fadeIn(".mask"));

  return (
    <div ref={aboutSectionRef} className="about-section" id="about-section">
      <div className="about-two about-part">
        <div className="abt-content ">
          <h3>For all players at any skill level</h3>
          <p>
            From beginners to elite players, Westside Volleyball Club has your
            back. We aim to promote unity in the community through our sport.
          </p>
        </div>
        <div className="abt-img skill-level-img"></div>
        <div className="mask"></div>
      </div>
      <div className="about-one about-part">
        <div className="abt-content">
          <h3>South West Sydney's volleyball hub</h3>
          <p>
            Come and find Westside Volleyball Club in the area. Play with us at
            Fairfield Leisure Centre, Cabramatta PCYC and Minto Leisure Centre.
          </p>
        </div>
        <div className="abt-img hub-img"></div>
        <div className="mask"></div>
      </div>
      <div className="about-two about-part">
        <div className="abt-content">
          <h3>Play how you want to play</h3>
          <p>
            Whether you want to play reps, develop your skills or just play for
            fun, Westside Volleyball Club caters to you! Join in on the action.
          </p>
        </div>
        <div className="abt-img play-img"></div>
        <div className="mask"></div>
      </div>
    </div>
  );
};

export default AboutSection;
