import React from "react";
import "../../styles/Reps.scss";
import Contact from "../Contact";

const JuniorsReps = () => {
  return (
    <div className="reps containerbox">
      <h1>Junior reps</h1>
      <h2>SVL Teams</h2>
      <ul>
        <li>
          <span className="team-name">
            <strong>Lono</strong> (Boys Division 1)
          </span>
          <ul>
            <li>COACH - Peter Phanouvong & Michael Chhuo</li>
          </ul>
        </li>
        <br />
        <li>
          <span className="team-name">
            <strong>Vavau</strong> (Boys Division 2)
          </span>
          <ul>
            <li>COACH - Jaydon Luc</li>
          </ul>
        </li>
        <br />
      </ul>
      <h2>Tryouts</h2>
      <p>Tryouts are held before the start of each SVL season (June).</p>
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

export default JuniorsReps;
