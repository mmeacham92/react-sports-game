import { useState } from "react";

const Header = ({
  venue,
  setScoreOne,
  setScoreTwo,
  changeTeams,
  setShotsTakenOne,
  setShotsTakenTwo,
}) => {
  let [numResets, setNumResets] = useState(0);

  // functions
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
  return (
    <div className="header">
      <h2>Welcome to</h2>
      <h1 className="banner">{venue}</h1>
      <button className="reset__button" onClick={resetGame}>
        Reset Game
      </button>
      <h4 className="hide num__resets">Number of resets: {numResets}</h4>
    </div>
  );
};

export default Header;
