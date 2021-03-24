import React from 'react';

import styled from 'styled-components';

import row3 from '../../assets/images/row3.png';

const WhiteBg = styled.section``;
const GreyBg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const RightSection = styled.div``;
const ImgStyle = styled.img`
  position: relative;
  left: 15%;
`;
const LeftSection = styled.section``;
const Tittle = styled.div`
  width: 50%;
  font-size: 34px;
  position: relative;
  left: 20%;
`;
const PTittle = styled.h1``;
const Description = styled.div`
  width: 50%;
  position: relative;
  left: 20%;
  font-size: 16px;
`;
const PDescription = styled.p``;


const Row3 = () => {
  return(
    <>
      <WhiteBg>
        <GreyBg>
          <RightSection>
            <ImgStyle src={row3} alt="" />
          </RightSection>
          <LeftSection>
            <Tittle>
              <PTittle> Sit back and watch the esults roll in </PTittle>
            </Tittle>
            <Description>
              <PDescription>
                Track sales from first click to
                purchase. See who paid for what and
                how much money your campaign has earned.
              </PDescription>
            </Description>
          </LeftSection>
        </GreyBg>
      </WhiteBg>
    </>
  )
}

export default Row3;