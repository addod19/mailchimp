import React from 'react';

import styled from 'styled-components';

import award from '../../assets/images/award.png';
import app from '../../assets/images/app.png';
import dir from '../../assets/images/dir.png';

const Title = styled.h1`
  width: 70%;
  margin: auto;
  padding: 20px;
  text-align: center;
  font-size: 55px;
`;
const Description = styled.p`
  width: 70%;
  margin: auto;
  padding: 5px;
  text-align: center;
  font-size: 24px;

  position: relative;
  left: -20%;
`;

const Partners = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  padding: 20px;
  justify-content: center;
  align-content: center;
`;

const LOGO = styled.img``;
const Text = styled.p`
  
`;
const NewBB = styled.article`
  align-items: center;
`;


const Vimeo = styled.article``;


const TEDD = styled.article``;

const MainWrap = styled.section``;
const TitleWrap = styled.div``;
const Link = styled.li`
  list-style: none;
`;
const Keep = () => {
  return(
    <>
      <MainWrap>
        <TitleWrap>
          <Title>
            Keep pushing forward.
            We've got your back.
          </Title>
        </TitleWrap>
        <Partners>
          <NewBB>
            <LOGO src={award} alt="New Belgium Brewery" />
            <Text>
              Award-winning support
            </Text>
            <Description>
              Get the help you need,
              whenever you need it with
              our 24/7 support
            </Description>
            <Link>
              Learn more
            </Link>
          </NewBB>
          <Vimeo>
            <LOGO src={app} alt="vimeo" />
            <Text>
            250+ app integrations
            </Text>
            <Description>
              You can connect all your tools to
              Mailchimp and unlock even more
              features
            </Description>
            <Link>
              Learn more
            </Link>
          </Vimeo>
          <TEDD>
            <LOGO src={dir} alt="TEDD" />
            <Text>
            A directory of trusted pros
            </Text>
            <Description>
              Take your marketing to the next level
              when you work with a mailchimp partner.
            </Description>
            <Link>
              Browse Partners
            </Link>
          </TEDD>
        </Partners>
      </MainWrap>
    </>
  )
}

export default Keep;