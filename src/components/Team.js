import React, { useState } from "react";

const Team = ({ name, logo }) => {
  let [shotsTaken, setShotsTaken] = useState(0);
  let [score, setScore] = useState(0);

  // functions
  const shootHandler = (e) => {
    console.log(`The ${name} take a shot...`);
    setShotsTaken(shotsTaken + 1);
    const percentage = 50;
    const random = Math.ceil(Math.random(0, 1) * 100);
    if (percentage >= random) {
      console.log("and they score!");
      setScore(score + 1);
    } else console.log('...and they miss.')
  };

  return (
    <div className="team">
      <h1>{name}</h1>
      <img className="logo" src={logo} alt=""></img>
      <p>Shots taken: {shotsTaken}</p>
      <p>Score: {score}</p>
      <button className="shootButton" onClick={shootHandler}>
        Shoot
      </button>
    </div>
  );
};

export default Team;
