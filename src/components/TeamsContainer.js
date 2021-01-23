import Team from './Team';

const TeamsContainer = ({
  team1,
  team2,
  shotsTakenOne,
  shotsTakenTwo,
  setShotsTakenOne,
  setShotsTakenTwo,
  scoreOne,
  scoreTwo,
  setScoreOne,
  setScoreTwo,
}) => {
  return (
    <div className="teams__container">
      <Team
        name={team1}
        logo={`./images/teams/${team1}.png`}
        shotsTaken={shotsTakenOne}
        score={scoreOne}
        setShotsTaken={setShotsTakenOne}
        setScore={setScoreOne}
      />
      <h3>VS</h3>
      <Team
        name={team2}
        logo={`./images/teams/${team2}.png`}
        shotsTaken={shotsTakenTwo}
        score={scoreTwo}
        setShotsTaken={setShotsTakenTwo}
        setScore={setScoreTwo}
      />
    </div>
  );
};

export default TeamsContainer;
