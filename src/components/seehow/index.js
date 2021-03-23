import React from 'react';

import Title from './title';
import Row1 from './row1';
import Row2 from './row2';
import Row3 from './row3';
import Row4 from './row4';

import styled from 'styled-components';

const Bg = styled.section`
  width: 100%;
  height: auto;
  background: #fbeeca;
`;

const SeeHow = () => {
  return(
    <Bg>
      <Title />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </Bg>
  )
}

export default SeeHow;