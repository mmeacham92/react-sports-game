import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import Header from "./Header";
import TeamsContainer from "./TeamsContainer";

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
      <Header venue={venue} resetGame={resetGame} numResets={numResets} />
      <Scoreboard
        team1={team1}
        team2={team2}
        scoreOne={scoreOne}
        scoreTwo={scoreTwo}
      />
      <TeamsContainer
        team1={team1}
        team2={team2}
        shotsTakenOne={shotsTakenOne}
        shotsTakenTwo={shotsTakenTwo}
        scoreOne={scoreOne}
        scoreTwo={scoreTwo}
        setScoreOne={setScoreOne}
        setScoreTwo={setScoreTwo}
        setShotsTakenOne={setShotsTakenOne}
        setShotsTakenTwo={setShotsTakenTwo}
      />
      <button className="venue__button" onClick={changeVenueHandler}>
        Change Venue
      </button>

      <audio id="swish__sound" src="./audio/swish.mp3"></audio>
      <audio id="brick__sound" src="./audio/brick.wav"></audio>
    </div>
  );
};

export default Game;
