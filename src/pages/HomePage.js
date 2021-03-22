import React from 'react';

import styled from 'styled-components';

import Title from '../components/hero/title';
import Description from '../components/hero/description';
import Link from '../components/hero/link';
import Image from '../components/hero/image';

const HomeSection = styled.section`
  width: 100%;
  min-height: 550px;
  display: flex;
  flex-direction: row;
`;
const FirstColumn = styled.section`
  width: 50%;
  background: #fcc203;
`;

const SecondColumn = styled.section`
  background: #fcc203;
  width: 50%;
`;
const HomePage = () => {
  return(
    <HomeSection>
      <FirstColumn>
        <Title />
        <Description />
        <Link />
      </FirstColumn>
      <SecondColumn>
        <Image className="logoStyle" />
      </SecondColumn> 
    </HomeSection>
  )
}

export default HomePage;