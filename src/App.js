import React, {useState} from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {

const [playerRoll, setPlayerRoll] = useState();
function deathroll(){console.log(Math.floor(Math.random() * playerRoll) + 1)}
  return (
    <div className="App">
      <header>
        <input
        onChange={e => setPlayerRoll(e.target.value)}></input>
        {playerRoll}
        <button onClick={deathroll}>Click me to deathroll!</button>
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);