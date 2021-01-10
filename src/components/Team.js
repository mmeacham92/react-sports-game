import React, { useState } from "react";

const Team = ({ name, logo }) => {
  let [shotsTaken, setShotsTaken] = useState(0);
  let [score, setScore] = useState(0);

  // functions
  const shoot = (e) => {
    console.log("Shot taken");
    setShotsTaken(shotsTaken + 1);
    const percentage = 50;
    const random = Math.ceil(Math.random(0, 1) * 100);
    console.log(random);
    if (percentage >= random) {
        console.log('Score!');
        setScore(score + 1);
    }
  };

  return (
    <div className="team">
      <h1>{name}</h1>
      <img className="logo" src={logo} alt=""></img>
      <p>Shots taken: {shotsTaken}</p>
      <p>Score: {score}</p>
      <button className="shootButton" onClick={() => shoot()}>
        Shoot
      </button>
    </div>
  );
};

export default Team;
