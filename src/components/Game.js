import React, { useState } from "react";
import Team from "./Team";

const Game = ({ venue }) => {
  return (
    <div>
      <h1>Welcome to {venue}</h1>
      <div id="teams__container">
        <Team name="Titans" logo="./images/TEN.png" />
        <Team name="Ravens" logo="./images/BAL.png" />
      </div>
    </div>
  );
};

export default Game;
