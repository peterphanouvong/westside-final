import React, { useState } from "react";
import { useHistory } from "react-router";

const TeamsSlide = () => {
  const [wHover, setWHover] = useState(false);
  const [mHover, setMHover] = useState(false);
  const [jHover, setJHover] = useState(false);

  const womensStyleClass = wHover ? "teams-slide-hover" : "";
  const mensStyleClass = mHover ? "teams-slide-hover" : "";
  const juniorsStyleClass = jHover ? "teams-slide-hover" : "";

  const history = useHistory();

  const handleRedirect = (url) => {
    history.push(url);
  };

  return (
    <div className="teams" id="reps-section">
      <div
        onMouseEnter={() => setWHover(true)}
        onMouseLeave={() => setWHover(false)}
        onClick={() => handleRedirect("/reps/womens")}
        className="teams-slide"
      >
        <div className="womens">
          <h2 className={womensStyleClass}>womens</h2>
        </div>
        <div className="slide-cover"></div>
      </div>
      <div
        onMouseEnter={() => setMHover(true)}
        onMouseLeave={() => setMHover(false)}
        onClick={() => handleRedirect("/reps/mens")}
        className="teams-slide"
      >
        <div className="mens ">
          <h2 className={mensStyleClass}>mens</h2>
        </div>
        <div className="slide-cover"></div>
      </div>
      <div
        onMouseEnter={() => setJHover(true)}
        onMouseLeave={() => setJHover(false)}
        onClick={() => handleRedirect("/reps/juniors")}
        className="teams-slide"
      >
        <div className="juniors ">
          <h2 className={juniorsStyleClass}>juniors</h2>
        </div>
        <div className="slide-cover"></div>
      </div>
    </div>
  );
};

export default TeamsSlide;
