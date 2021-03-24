import React from 'react';

import row1 from '../../assets/images/row1.png';

import styled from 'styled-components';
// import Description from '../hero/description';

const WhiteBg = styled.section``;
const GreyBg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const RightSection = styled.div`
`;
const ImgStyle = styled.img`
  position: relative;
  left: 15%;
`;
const LeftSection = styled.section`
`;
const Tittle = styled.div`
  width: 50%;
  font-size: 34px;
  position: relative;
  left: 20%;
`;
const PTittle = styled.h1``;
const Describe = styled.div`
  width: 50%;
  position: relative;
  left: 20%;
  font-size: 16px;
`;
const PDescription = styled.p``;

const Row1 = () => {
  return(
    <>
      <WhiteBg>
      <GreyBg>
        <RightSection>
          <ImgStyle src={row1} alt="row 1 image" />
        </RightSection>
        <LeftSection>
          <Tittle>
            <PTittle> Connect your store to give regular emails and sales boost </PTittle>
          </Tittle>
          <Describe>
            <PDescription>
              Do more with your marketing using the power of
              analytics. Sync your store data and get pre-built
              customer segments based on purchase behaviour to
              improve your sales
            </PDescription>
          </Describe>
        </LeftSection>
      </GreyBg>
    </WhiteBg>
    </>
  )
}

export default Row1;