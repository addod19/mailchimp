import React from 'react';

import styled from 'styled-components';

import Title from '../components/hero/title';
import Description from '../components/hero/description';
import Link from '../components/hero/link';
import Image from '../components/hero/image';
import HeadLiner from '../components/headliner/headLiner';
import GetBusiness from '../components/business/getBusiness';
import MarketBusiness from '../components/business/marketBusiness';
import Help from '../components/help';
import Grow from '../components/grow';
import Keep from '../components/keep';
import SeeHow from '../components/seehow';

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
    <>
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
    <HeadLiner />
    <GetBusiness />
    <MarketBusiness />
    <Help />
    <Grow />
    <Keep />
    <SeeHow />
    </>
  )
}

export default HomePage;