import React, { useState } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {

  const [wager, setWager] = useState();
  const [players,setPlayer] = useState([]);
  const [gorp,setGorp] = useState([]);

  function deathroll() { 
    const startingRoll = wager * 2;
    setPlayer([...players,((Math.floor(Math.random() * startingRoll) + 1))]) }

  return (
    <Container className="alex">
      
      <Row>
      <input onChange={e => setWager(e.target.value)}></input>
      </Row>
      <Row>
      <div>
        {players.map(player => (
          <li>{player}</li>
        ))}
      </div>
      </Row>
      <Row>
      <button onClick={deathroll}>Click me to deathroll!</button>
      </Row>
      
        
        
      
      {/* <AmplifySignOut /> */}
      
    </Container>
  );
}

export default withAuthenticator(App);