import React from 'react';

import styled from 'styled-components';

const StackBg = styled.section`
  width: 100%;
  height: 700px;
  background: #f6f6f4;
`;
const Link = styled.a`
  position: relative;
  top: 35%;
  left: 20%;

  text-decoration: none;
  color: #007c89;

`;

const LWrap = styled.div`
  width: 20%;
  height: 70px;
  border: 2px solid #007c89;

  position: relative;
  left: 40%;

  &:hover {
    opacity: .5;
    border: 1px solid #007c89;
  }
`;
const Text = styled.h2`
  width: 40%;
  position: relative;
  left: 30%;

  font-size: 65px;
  text-align: center;
`;
const Stack = () => {

  return(
    <>
      <StackBg>
        <Text>
          Mailchimp was recently named one of the best
          Software Companies of 2020 by G2
        </Text>
        <LWrap>
          <Link href="#">
            See how we stack up
          </Link>
        </LWrap>
      </StackBg>
    </>
  )
}

export default Stack;