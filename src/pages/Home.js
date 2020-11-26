import React from "react";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1>join the movement</h1>
        <h4>be a part of the fun at Westside</h4>
      </div>

      <div className="about-section">
        <div className="about-one">
          <h2>We cater to all players</h2>
          <p>from beginners to elite players, westside has your back.</p>
          <p>We promote unity in the community through our sport</p>
          <p>See our community events.</p>
        </div>
        <div className="about-two">
          <h2>
            We are the volleyball community in the South West Sydney region
          </h2>
          <p>
            Come and play with us at Fairfield Leisure Centre, Cabramatta PCYC
            and Minto Leisure Centre.
          </p>
        </div>
      </div>

      <div className="teams">
        <div className="womens">
          <h2>womens</h2>
        </div>
        <div className="mens">
          <h2>mens</h2>
        </div>
        <div className="juniors">
          <h2>juniors</h2>
        </div>
      </div>

      <div className="socials">
        <div className="social-trainings">
          <h2>Social trainings</h2>
        </div>
        <div className="social-competitions">
          <h2>Social competitions</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
