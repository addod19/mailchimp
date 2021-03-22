import React from 'react';

import styled from 'styled-components';

const Text1 = styled.div`
  width: 40%;
  position: relative;
  top: 30%;
  left: 25%;
`;

const H1 = styled.h1`
  font-size: 2em;
`;
const Title = () => {
  return(
    <Text1>
      <H1> Marketing Smarts for Big Ideas</H1>
    </Text1>
  )
}

export default Title;