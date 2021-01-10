import React from "react";
import Game from './components/Game';
import "./styles/App.css";

function App() {
  const venues = [
    'Madison Square Garden',
    'Nissan Stadium',
    'Orchard Park',
    'Arrowhead Stadium',
    'The White House'
  ];
  const venue = venues[Math.floor(Math.random() * venues.length)];

  return (
    <Game venue={venue}/>
  );
}

export default App;
