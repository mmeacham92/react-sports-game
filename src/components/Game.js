import React, { useState } from "react";
import Team from "./Team";

const Game = ({ venue, venues, setVenue, allTeams }) => {
  let [shotsTakenOne, setShotsTakenOne] = useState(0);
  let [shotsTakenTwo, setShotsTakenTwo] = useState(0);
  let [scoreOne, setScoreOne] = useState(0);
  let [scoreTwo, setScoreTwo] = useState(0);
  let [numResets, setNumResets] = useState(0);
  const [team1, setTeam1] = useState(
    allTeams[Math.floor(Math.random() * allTeams.length)]
  );
  const remainingTeams = allTeams.filter((team) => team !== team1);
  const [team2, setTeam2] = useState(
    remainingTeams[Math.floor(Math.random() * remainingTeams.length)]
  );
  // const team1 = ];
  // const team2 = teams.filter(t => t !== team1)[Math.floor(Math.random)]

  const changeVenueHandler = () => {
    const remainingVenues = venues.filter((v) => v !== venue);
    setVenue(
      remainingVenues[Math.floor(Math.random() * remainingVenues.length)]
    );
  };

  const resetGame = () => {
    const scorePercentageDivs = document.querySelectorAll(".score__percentage");
    scorePercentageDivs.forEach((div) => div.classList.add("hide"));
    resetScores();
    document.querySelector(".num__resets").classList.remove("hide");
    changeTeams();
    setNumResets(numResets + 1);
  };

  const resetScores = () => {
    setShotsTakenOne(0);
    setShotsTakenTwo(0);
    setScoreOne(0);
    setScoreTwo(0);
  };

  const changeTeams = async () => {
    setTeam1(allTeams[Math.floor(Math.random() * allTeams.length)]);
    await setTeam2(
      remainingTeams[Math.floor(Math.random() * remainingTeams.length)]
    );
  };

  return (
    <div className="game__container">
      <h2>Welcome to</h2>
      <h1 className="banner">{venue}</h1>
      <button className="reset__button" onClick={resetGame}>
        Reset Game
      </button>
      <p className="hide num__resets">Number of resets: {numResets}</p>
      <div className="teams__container">
        <Team
          name={team1}
          logo={`./images/${team1}.png`}
          shotsTaken={shotsTakenOne}
          score={scoreOne}
          setShotsTaken={setShotsTakenOne}
          setScore={setScoreOne}
        />
        <h3>VS</h3>
        <Team
          name={team2}
          logo={`./images/${team2}.png`}
          shotsTaken={shotsTakenTwo}
          score={scoreTwo}
          setShotsTaken={setShotsTakenTwo}
          setScore={setScoreTwo}
        />
      </div>
      <button className="venue__button" onClick={changeVenueHandler}>
        Change Venue
      </button>

      <audio id="swish__sound" src="./audio/swish.mp3"></audio>
      <audio id="brick__sound" src="./audio/brick.wav"></audio>
    </div>
  );
};

export default Game;
