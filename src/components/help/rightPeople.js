import React from 'react';

import styled from 'styled-components';

import rightp from '../../assets/images/rightp.png';

const WhiteBg = styled.section`
  width: 100%;
  height: 400px;
  background: #fff;
`;

const GreyBg = styled.div`
  width: 70%;
  height: 380px;
  background: white;
  color: #fff;
  margin: auto;
  margin-top: 50px;

  display: flex;
  flex-direction: row;
`;

const LeftSection = styled.section`
  width: 50%;
  color: white;
`;
const RightSection = styled.section`
  width: 50%;
  color: white;
`;

const Tittle = styled.div`
  position: relative;
  width: 90%;
  left: 20%;
  top: 5%;
`;
const PTittle = styled.h1`
  font-size: 34px;
  color: black;
`;

const Description = styled.div`
  position: relative;
  width: 70%;
  left: 20%;
  top: 5%;
`;
const PDescription = styled.p`
  font-size: 22px;
  color: black;
`;

const Links = styled.div`
  position: relative;
  left: 20%;
  top: 5%;
`;
const ALink = styled.a`
  text-decoration: none;
  color: #007c89;
`;

const ImgStyle = styled.img`
  position: relative;
  left: 10%;
  top: 10%;
`;

const RightPeople = () => {
  return(
    <WhiteBg>
      <GreyBg>
        <RightSection>
          <ImgStyle src={rightp} alt="" />
        </RightSection>
        <LeftSection>
          <Tittle>
            <PTittle> Market your business </PTittle>
          </Tittle>
          <Description>
            <PDescription>
              Send the right message on all the right channels.
              Build emails, social ads, landing pages, postcards,
              and more from one place.
            </PDescription>
          </Description>
          <Links>
            <ALink href="#">
              Marketing campaigns
            </ALink> 
          </Links>
        </LeftSection>
      </GreyBg>
    </WhiteBg>
  )
}

export default RightPeople;