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
  ];
  let [venue, setVenue] = useState(venues[Math.floor(Math.random() * venues.length)]);

  return <Game venue={venue} setVenue={setVenue} venues={venues} />;
}

export default App;
