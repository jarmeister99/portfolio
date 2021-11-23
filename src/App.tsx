import React from 'react';
import Section from './components/Section/Section';
import IntroductionSection from './components/Section/sections/Introduction';

import './index.css'

function App() {
  return (
    <div className="App">
      <div>
        <Section heading={"Introduction"} content={IntroductionSection}/>
        <Section heading={"Projects"} content={IntroductionSection} />
        <Section heading={"Work Experience"} content={IntroductionSection}/>
        <Section heading={"Technologies"} content={IntroductionSection}/>
        <Section heading={"Extras"} content={IntroductionSection}/>
      </div>
    </div>
  );
}

export default App;
