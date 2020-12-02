import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SocialsSlide = () => {
  const [tHover, setWHover] = useState(false);
  const [cHover, setMHover] = useState(false);

  const trainingStyleClass = tHover ? "teams-slide-hover" : "";
  const compsStyleClass = cHover ? "teams-slide-hover" : "";

  const history = useHistory();

  const handleRedirect = (url) => {
    history.push(url);
  };

  return (
    <div className="socials" id="socials-section">
      <div
        onMouseEnter={() => setWHover(true)}
        onMouseLeave={() => setWHover(false)}
        onClick={() => handleRedirect("/socials/training")}
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
        onClick={() => handleRedirect("/socials/competitions")}
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
