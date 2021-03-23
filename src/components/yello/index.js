import React from'react';

import styled from 'styled-components';

const Bg = styled.section`
  width: 100%;
  height: 500px;
  background: #ffe01b;
  margin: 0;
`;
const Title = styled.h1`
  width: 50%;
  position: relative;
  left: 38%;
  top: 20%;
  font-size: 65px;
`;
const Des = styled.p`
  width: 50%;
  position: relative;
  left: 38%;
  top: 20%;

`;
const Btn = styled.button`
  width: 110px;
  height: 45px;
  border: none;
  color: white;
  position: relative;
  left: 47%;
  top: 20%;
  text-decoration: none;
  background: #007c89;
  
  &:hover {
    cursor: pointer;
  }
`;

const Yello = () => {
  return(
    <Bg>
      <Title>Let's do this</Title>
      <Des>
        Every big idea starts with a small step forward
      </Des>
      <Btn href="#">
        Pick a Plan
      </Btn>
    </Bg>
  )
}

export default Yello;