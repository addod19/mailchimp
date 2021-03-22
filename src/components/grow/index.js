import React from 'react';

import styled from 'styled-components';

import nbb from '../../assets/images/nbb.png';
import vimeo from '../../assets/images/vimeo.png';
import ted from '../../assets/images/ted.png';


const SectionWrap = styled.section`
  width: 100%;
  height: 400px;
  background: #f6f6f4;
`;

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
  padding: 30px;
  text-align: center;
  font-size: 24px;
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
const Text = styled.p``;
const NewBB = styled.article`
  align-items: center;
`;


const Vimeo = styled.article``;


const TEDD = styled.article``;
const Grow = () => {
  return(
    <>
      <SectionWrap>
        <Title>Grow with Mailchimp</Title>
        <Description>
          Our marketing platform helps brands like these 
          build their thing and keep it growing.
        </Description>
        <Partners>
          <NewBB>
            <LOGO src={nbb} alt="New Belgium Brewery" />
            <Text>
              Customers since 2011
            </Text>
          </NewBB>
          <Vimeo>
            <LOGO src={vimeo} alt="vimeo" />
            <Text>
            Customers since 2012
            </Text>
          </Vimeo>
          <TEDD>
            <LOGO src={ted} alt="TEDD" />
            <Text>
            Customers since 2010
            </Text>
          </TEDD>
        </Partners>
      </SectionWrap>
    </>
  )
}

export default Grow;