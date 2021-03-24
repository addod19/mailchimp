import React from 'react';

import styled from 'styled-components';

const Links = styled.button`
  width: 180px;
  height: 65px;
  background: blue;
  border: none;
  color: white;
  background: #007c89;

  position: relative;
  left: 43%;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;

const Li = styled.h3`
  font-weight: 400;
`;
const Title = styled.div`
  width: 50%;
  position: relative;
  left: 25%;
  font-size: 40px;
`;
const Tt = styled.h1`
  text-align: center;
`;

const Description = styled.div`
  width: 50%;
  position: relative;
  left: 25%;
  font-size: 22px;
`;
const Desc = styled.p`
  text-align: center;
`;

const Row4 = () => {
  return(
    <>
      <Title>
        <Tt>Up to 6x more orders with automation</Tt>
      </Title>
      <Description>
        <Desc>
          Make your marketing work harder so you focus
          on running. Our data shows automations can generate
          up to 6 times more orders than bulk email alone.
        </Desc>
      </Description>
      <Links>
        <Li>See All Smarts</Li>
      </Links>
    </>
  )
}

export default Row4;