import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'

function App() {
  return (
    <div className="App">
      <Greet name="Chad" messageCount={20} isLoggedIn={false}/>

      <Person name="Bruce Wayne"/>
    </div>
  );
}

export default App;
