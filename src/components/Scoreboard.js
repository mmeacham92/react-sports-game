const Scoreboard = ({ team1, team2, scoreOne, scoreTwo }) => {
  return (
    <div className="scoreBoard">
      <div className="home__div score__div">
        <h1 className='teamOne team__name'>{team1}</h1>
        <h1 className='scoreOne team__score'>{scoreOne}</h1>
      </div>
      <div className="visitors__div score__div">
        <h1 className='teamTwo team__name'>{team2}</h1>
        <h1 className='scoreTwo team__score'>{scoreTwo}</h1>
      </div>
    </div>
  );
};

export default Scoreboard;
