import React, { useState } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {

  const [wager, setWager] = useState();
  const [player,setPlayer] = useState([]);
  const [gorp,setGorp] = useState([]);

  function deathroll() { 
    const startingRoll = wager * 2;
    setPlayer([...player,((Math.floor(Math.random() * startingRoll) + 1))]) }

  return (
    <div className="App">
      <header>
        <input onChange={e => setWager(e.target.value)}></input>
        {player}
        <button onClick={deathroll}>Click me to deathroll!</button>
      </header>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default withAuthenticator(App);