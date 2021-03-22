import React from 'react';

import styled from 'styled-components';

const MainWrap = styled.section`
  background: #fff;
  line-height: 1.35;
  color: #403b3b;
  font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
  width: 100%;
  height: 400px;

`;

const H2 = styled.h2`
  color: #241c15;
  font-family: Means Web,Georgia,Times,Times New Roman,serif;
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.03125rem;

  width: 50%;
  margin: auto;
  padding: 50px;
`;

const P = styled.p`
  color: #403b3b;
  font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0;

  position: relative;
  top: 40%;
  height: 50px;
  width: 50%;
  margin: auto;
  padding: 50px;
`;
const HeadLiner = () => {
  return(
    <MainWrap>
      <H2>Do it all with Mailchimp</H2>
      <div>
        <P>
          Bring your audience data, marketing channels, and
          insights togetherso you can reach your goals faster
          - all from a single platform
        </P>
      </div>
    </MainWrap>
  )
}

export default HeadLiner;