import React from 'react';

import styled from 'styled-components';

import row2 from '../../assets/images/row2.png';

const WhiteBg = styled.section``;
const GreyBg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const RightSection = styled.div``;
const ImgStyle = styled.img``;
const LeftSection = styled.section`
`;
const Tittle = styled.div`
  width: 50%;
  position: relative;
  left: 16%;
  padding: 20px;
  font-size: 40px;
`;
const PTittle = styled.h1``;
const Description = styled.div`
  width: 50%;
  position: relative;
  left: 20%;
  font-size: 18px;
`;
const PDescription = styled.p``;

const Row2 = () => {
  return(
    <>
      <WhiteBg>
      <GreyBg>
        <LeftSection>
          <Tittle>
            <PTittle> Pave the way to purchase </PTittle>
          </Tittle>
          <Description>
            <PDescription>
              Put your customers on personalized
              journeys that lead them to
            </PDescription>
          </Description>
        </LeftSection>
        <RightSection>
          <ImgStyle src={row2} alt="" />
        </RightSection>
      </GreyBg>
    </WhiteBg>
    </>
  )
}

export default Row2;