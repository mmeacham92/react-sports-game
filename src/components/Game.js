import React, { useState } from "react";
import Team from "./Team";

const Game = ({ venue, venues, setVenue }) => {
    const changeVenueHandler = () => {
        const remainingVenues = venues.filter(v => v !== venue);
        console.log(remainingVenues);
        setVenue(remainingVenues[Math.floor(Math.random() * remainingVenues.length)]);
    }
  return (
    <div className='game__container'>
      <h1 className='banner'>Welcome to {venue}</h1>
      <div id="teams__container">
          {/* {teams.map(team => (
              <Team
              team={team}
              shotsTaken={shotsTaken}
              score={score}
              setShotsTaken={setShotsTaken}
              setScore={setScore}
            />
          ))} */}
        <Team
          name="Titans"
          logo="./images/TEN.png"
        //   shotsTaken={shotsTaken}
        //   score={score}
        //   setShotsTaken={setShotsTaken}
        //   setScore={setScore}
        />
        <h3>VS</h3>
        <Team
          name="Ravens"
          logo="./images/BAL.png"
        //   shotsTaken={shotsTaken}
        //   score={score}
        //   setShotsTaken={setShotsTaken}
        //   setScore={setScore}
        />
      </div>
      <button onClick={changeVenueHandler}>Change Venue</button>
    </div>
  );
};

export default Game;
