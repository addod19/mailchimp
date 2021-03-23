import React from 'react';

import styled from 'styled-components';

import smile from '../../assets/images/smile.png';
import logo from '../../assets/images/17th.png';

const MainWrap = styled.section`
  width: 100%;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftSection = styled.article`
  width: 100%;
  display: grid;
  gird-template-columns: 1fr;
`;
const RightSection = styled.article`
  width: 100%;
  display: grid;
  gird-template-columns: 1fr;

`;

const PostWrap = styled.div`
  width: 100%;
`;
const Post = styled.div`
  width: 60%;
  position: relative;
  left: 25%;
  font-size: 23px;
`;
const Author = styled.div`
  width: 100%;

`;
const Span = styled.span`
  width: 70%;
  position: relative;
  left: 25%;

  display: flex;
  flex-direction: row;

  color: grey;
`;
const Name = styled.h3``;
const Results = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  position: relative;
  top: -20%;
`;
const Ldir = styled.div`
  width: 50%;
  position: relative;
  left: 50%;
`;
const Percent = styled.h1`
  font-size: 65px;
  color: grey;
`;
const Text = styled.p`
  font-size: 16px;
  color: grey;

  position: relative;
  top: -15%;
`;
const Rdir = styled.div`
  width: 50%;
  position: relative;
  left: 30%;
`;
const ImgContainer = styled.div`
  width: 100%;

`;
const Img = styled.img`
  position: relative;
  left: 10%;
  top: 10%;
`;
const LogoWrap = styled.div`
  width: 100%;
`;
const Logo = styled.img`
  position: relative;
  left: 25%;
`;

const Stats = ()=> {
  return(
    <>
    <MainWrap>
      <LeftSection>
        <LogoWrap>
          <Logo src={logo} alt="17th street"></Logo>
        </LogoWrap>
        <PostWrap>
          <Post>
            "Since using Mailchimp, I feel so much more confident in managing
            all our marketing. Like I got this."
          </Post>
          <Author>
            <Span>
              <span> - </span>
              <Name>Marissa Axell, co-founder of 17th Street Athletic Club</Name>
            </Span>
          </Author>
        </PostWrap>
        <Results>
          <Ldir>
            <Percent>
              37%
            </Percent>
            <Text>
              lift on online bookings
            </Text>
          </Ldir>
          <Rdir>
            <Percent>
              250%
            </Percent>
            <Text>
              increase in email signups
            </Text>
          </Rdir>
        </Results>
      </LeftSection>
      <RightSection>
        <ImgContainer>
          <Img src={smile} alt="image" />
        </ImgContainer>
      </RightSection>
    </MainWrap>
      
    </>
  )
}

export default Stats;