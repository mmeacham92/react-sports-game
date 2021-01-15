import React, { useState } from "react";
import Game from "./components/Game";
import "./styles/App.css";

function App() {
  const venues = [
    "Madison Square Garden",
    "Nissan Stadium",
    "Orchard Park",
    "Arrowhead Stadium",
    "The White House",
    "Adelphia Colosseum",
  ];

  const allTeams = [
    "ARI",
    "ATL",
    "BAL",
    "BUF",
    "CAR",
    "CHI",
    "CIN",
    "CLE",
    "DAL",
    "DEN",
    "DET",
    "GB",
    "HOU",
    "IND",
    "JAX",
    "KC",
    "LAC",
    "LAR",
    "MIA",
    "MIN",
    "NE",
    "NO",
    "NYG",
    "NYJ",
    "OAK",
    "PHI",
    "PIT",
    "SEA",
    "SF",
    "TB",
    "TEN",
    "WAS",
  ];

  let [venue, setVenue] = useState("Adelphia Colosseum");

  return <Game venue={venue} setVenue={setVenue} venues={venues} allTeams={allTeams}/>;
}

export default App;
