import React from 'react';

import styled from 'styled-components';

import { FaArrowRight } from 'react-icons/fa';
import manage from '../../assets/images/MANAGE.png';

const WhiteBg = styled.section`
  width: 100%;
  height: 500px;
  background: #fff;
`;

const GreyBg = styled.div`
  width: 70%;
  height: 380px;
  background: #403b3b;
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
  width: 70%;
  left: 20%;
  top: 5%;
`;
const PTittle = styled.h1`
  font-size: 34px;
`;

const Description = styled.div`
  position: relative;
  width: 70%;
  left: 20%;
  top: 5%;
`;
const PDescription = styled.p`
  font-size: 22px;
`;

const Links = styled.div`
  position: relative;
  left: 20%;
  top: 5%;
`;
const ALink = styled.a`
  text-decoration: none;
  color: #fcc203;
`;

const ImgStyle = styled.img`
  position: relative;
  left: 10%;
  top: 10%;
`;

const GetBusiness = () => {
  return(
    <WhiteBg>
      <GreyBg>
        <LeftSection>
          <Tittle>
            <PTittle>Get your business online</PTittle>
          </Tittle>
          <Description>
            <PDescription>
              Give your brand a home with a custom domain.
              Then create a website with built-in marketing tools
              to help you launch it.
            </PDescription>
          </Description>
          <Links>
            <ALink href="#">
              Websites and Domain <FaArrowRight size="" />
            </ALink> 
          </Links>
        </LeftSection>
        <RightSection>
          <ImgStyle src={manage} alt="" />
        </RightSection>
      </GreyBg>
    </WhiteBg>
  )
}

export default GetBusiness;