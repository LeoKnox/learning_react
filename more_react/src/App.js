import React from 'react';
import './App.css';
import Head from './Head';
import Nav from './Nav';
import Main from './Main';
import Foot from './Foot';

function App() {
  let ground = { color:"blue" };

  const runSomething = () => {
    console.log("something");
  }

  return (
    <div className="App">
      <Head {...runSomething} />
      <Nav />
      <Main {...ground}/>
      <Foot />
    </div>
  )
}

export default App;
