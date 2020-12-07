import React from "react";
import Contact from "../Contact";

const WomensReps = () => {
  return (
    <div className="reps page">
      <h1>Womens reps</h1>
      <h2>SVL Teams</h2>
      <ul>
        <li>
          <span className="team-name">
            <strong>Nafanua</strong> (Reserves)
          </span>
          <ul>
            <li>COACH - Francis Uso</li>
          </ul>
        </li>
        <br />
        <li>
          <span className="team-name">
            <strong>Pele</strong> (Division 1)
          </span>
          <ul>
            <li>COACH - Margie Masefau</li>
          </ul>
        </li>
        <br />
        <li>
          <span className="team-name">
            <strong>Taema</strong> (Division 3)
          </span>
          <ul>
            <li>COACH - Daniel Ada</li>
          </ul>
        </li>
        <br />
      </ul>
      <h2>Tryouts</h2>
      <p>
        Tryouts for Westside Volleyball Reps teams are held before the start of
        each SVL season (June).
      </p>
      <br />
      <h2>Trainings</h2>
      <p>
        Being a selected as a part of a reps team means that you get to go to
        team trainings.
      </p>

      <Contact />
    </div>
  );
};

export default WomensReps;
