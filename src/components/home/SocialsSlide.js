import React, { useState } from "react";

const SocialsSlide = () => {
  const [tHover, setWHover] = useState(false);
  const [cHover, setMHover] = useState(false);

  const trainingStyleClass = tHover ? "teams-slide-hover" : "";
  const compsStyleClass = cHover ? "teams-slide-hover" : "";

  return (
    <div className="socials">
      <div
        onMouseEnter={() => setWHover(true)}
        onMouseLeave={() => setWHover(false)}
        className="socials-slide"
      >
        <div className="social-training">
          <h2 className={trainingStyleClass}>Social TRaining</h2>
        </div>
        <div className="slide-cover"></div>
      </div>
      <div
        onMouseEnter={() => setMHover(true)}
        onMouseLeave={() => setMHover(false)}
        className="socials-slide"
      >
        <div className="social-comps">
          <h2 className={compsStyleClass}>Social Competitions</h2>
        </div>
        <div className="slide-cover"></div>
      </div>
    </div>
  );
};

export default SocialsSlide;
