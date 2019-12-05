import React from 'react';
import './App.css';
import Films from "./containers/Films/Films";
import Jokes from "./containers/Jokes/Jokes";

function App() {
  return (
    <div className='container'>
      <div className='box'>
        <Films/>
        <Jokes/>
      </div>
    </div>
  );
}

export default App;
