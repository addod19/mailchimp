import React from 'react';
import RightPeople from './rightPeople';

import styled from 'styled-components';
import BetterContent from './betterContent';
import AutomateMarketing from './automateMarketing';
import TakeAction from './takeAction';

const Title = styled.h1`
  position: relative;
  left: 14.5%;
  width: 300px;
`;


const Help = () => {
  return(
    <>
      <Title>
        We'll help you - 
      </Title>
      <RightPeople />
      <BetterContent />
      <AutomateMarketing />
      <TakeAction />
    </>
  )
}

export default Help;