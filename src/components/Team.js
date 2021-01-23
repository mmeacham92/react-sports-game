import React from "react";

const Team = ({ name, logo, shotsTaken, score, setScore, setShotsTaken }) => {
  // let [shotsTaken, setShotsTaken] = useState(0);
  // let [score, setScore] = useState(0);

  // functions

  const shootHandler = (e) => {
    document
      .querySelector(`.${name}__score__percentage`)
      .classList.remove("hide");
    setShotsTaken(shotsTaken + 1);
    const percentage = 50;
    const random = Math.ceil(Math.random(0, 1) * 100);
    if (percentage >= random) {
      const swishSound = document.querySelector("#swish__sound");
      swishSound.play();
      setScore(score + 1);
    } else {
      const brickSound = document.querySelector("#brick__sound");
      brickSound.play();
    }
  };

  return (
    <div className="team">
      <h1>{name}</h1>
      <img className="logo" src={logo} alt=""></img>
      <p>Field Goals Attempted: {shotsTaken}</p>
      {/* <p>Field Goals Made: {score}</p> */}
      <p className={`${name}__score__percentage score__percentage hide`}>
        Field Goal Percentage: {((score / shotsTaken) * 100).toFixed(2)} %
      </p>
      <button className="shoot__button" onClick={shootHandler}>
        Kick
      </button>
    </div>
  );
};

export default Team;
