import React from 'react';
import Section from './components/Section/Section';
import EducationSection from './components/Section/sections/Education';
import ExtraSection from './components/Section/sections/Extra';
import IntroductionSection from './components/Section/sections/Introduction';
import ProjectSection from './components/Section/sections/Projects';
import TechnologiesSection from './components/Section/sections/Technologies';
import WorkExperienceSection from './components/Section/sections/WorkExperience';

import styled from 'styled-components'

import './index.scss'

const AppContainer = styled.div`

`;

function App() {
  return (
    <AppContainer className="App">
      <Section heading={"Introduction"} content={IntroductionSection} />
      <Section heading={"Projects"} content={ProjectSection} />
      <Section heading={"Technologies"} content={TechnologiesSection} />
      <Section heading={"Work Experience"} content={WorkExperienceSection} />
      <Section heading={"Education"} content={EducationSection} />
      <Section heading={"Extras"} content={ExtraSection} />
    </AppContainer>
  );
}

export default App;
