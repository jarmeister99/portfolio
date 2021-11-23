import React from 'react';
import Section from './components/Section/Section';

import './index.css'

function App() {
  return (
    <div className="App">
      <div>
        <Section heading={"Introduction"}/>
        <Section heading={"Projects"}/>
        <Section heading={"Work Experience"}/>
        <Section heading={"Technologies"}/>
        <Section heading={"Extras"}/>
      </div>
    </div>
  );
}

export default App;
