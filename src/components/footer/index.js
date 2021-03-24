import React from 'react';

import styled from 'styled-components';

import last from '../../assets/images/last.png';
import last1 from '../../assets/images/last1.png';

import { FaArrowRight, FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin,
  FaYoutube, FaPinterest } 
from 'react-icons/fa';

import AS from '../../assets/images/AS.png';
import GP from '../../assets/images/GP.png';

const FooterWrap = styled.section`
  width: 100%;
  height: 900px;
  background: #efeeea;
`;

const FirstRow = styled.div`
  width: 80%;
  height: 500px;

  position: relative;
  left: 10%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
const SecondRow = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  justify-content: center;


`;

const Col1 = styled.div`
  height: 300px;
`;
const Col2 = styled.div`
height: 300px;

`;
const Col3 = styled.div`
height: 300px;

`;
const Col4 = styled.div`
height: 300px;

`;
const Col5 = styled.div`
height: 300px;

`;
const Col6 = styled.div`
  height: 300px;
`;

const H3 = styled.h3`
  text-align: center;
  color: #241c15;
  font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
`;
const Ul = styled.ul``;
const Li = styled.li`
  list-style: none;
  color: #241c15;
  font-size: .8125rem;
  font-weight: 400;


`;
const Desc = styled.p`
  font-size: .8125rem;
  font-family: Means Web,Georgia,Times,Times New Roman,serif;
  font-weight: 300;
`;

const Hr = styled.hr`
  width: 100%;
  color: black;
`;

const Logoh = styled.img``;

const R1 = styled.div``;
const R2 = styled.div``;

const A = styled.a`
  color: #241c15;
  font-size: .8125rem;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const AppBank = styled.section`
  margin: 50px;
`;

const AppStore = styled.img`
  margin-right: 10px;
`;
const GooglePlay = styled.img`
  margin-left: 10px;
`;
const SocialMedia = styled.div`
  display: flex;

  margin: 50px;
`;
const Fb = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Twit = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Ig = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Linked = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Youtube = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Pinterest = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const CopyWright = styled.div`
  margin: 50px;
  width: 300px;
`;
const Btn = styled.button`
  width: 130px;
  height: 50px;
  border: 1px solid black;

  &:hover {
    color: #241c15;
    background: rgba(255,113,208,.2);
    cursor: pointer;
  }
`;

const P = styled.p`
  width: 100%;
  color: rgba(36,28,21,.65);
  font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0;
`;

const Footer = () => {
  return(
    <>
      <FooterWrap>
        <FirstRow>
          <Col1>
            <H3>Products</H3>
            <Ul>
              <Li><A href="#">Why Mailchimp?</A></Li>
              <Li><A href="#">Products update</A></Li>
              <Li><A href="#">Email Marketing</A></Li>
              <Li><A href="#">Websites</A></Li>
              <Li><A href="#">Transactional email</A></Li>
              <Li><A href="#">How we compare</A></Li>
              <Li><A href="#">GDPR Compliance</A></Li>
              <Li><A href="#">Security</A></Li>
              <Li><A href="#">Status</A></Li>
              <Li><A href="#">Mobile App</A></Li>
            </Ul>
          </Col1>
          <Col2>
            <H3>Resources</H3>
            <Ul>
              <Li><A href="#">Guides and Tutorial</A></Li>
              <Li><A href="#">Marketing Tips</A></Li>
              <Li><A href="#">Marketing Glossary</A></Li>
              <Li><A href="#">Browse by Topic</A></Li>
              <Li><A href="#">Integrations Directory</A></Li>
            </Ul>
          </Col2>
          <Col3>
            <H3>Community</H3>
            <Ul>
              <Li><A href="#">Agencies & Freelancers</A></Li>
              <Li><A href="#">Developers</A></Li>
              <Li><A href="#">Events</A></Li>
            </Ul>
          </Col3>
          <Col4>
            <H3>Company</H3>
            <Ul>
              <Li><A href="#">Our Story</A></Li>
              <Li><A href="#">Newsroom</A></Li>
              <Li><A href="#">Annual Report</A></Li>
              <Li><A href="#">Careers</A></Li>
            </Ul>
          </Col4>
          <Col5>
            <H3>Help</H3>
            <Ul>
              <Li><A href="#">Contact Us</A></Li>
              <Li><A href="#">Hire an Expert</A></Li>
            </Ul>
          </Col5>
          <Col6>
            <R1>
              <H3><Logoh src={last} alt="" /></H3>
              <Desc>
                Films, podcasts and original series that celebrate
                the entrepreneurial spirit.
              </Desc>
              <A>
                Check it out <FaArrowRight />
              </A>
            </R1>
            <R2>
              <H3><Logoh src={last1} alt="" /></H3>
              <Desc>
                Experts insights, industry trends, and inspiring
                stories that help you live and work on your
                own terms
              </Desc>
              <A>
                Learn more <FaArrowRight />
              </A>
            </R2>
          </Col6>        
        </FirstRow>
        <Hr></Hr>
        <SecondRow>
          <AppBank>
            <AppStore src={AS} alt="app store"></AppStore>
            <GooglePlay src={GP} alt="google play"></GooglePlay>
          </AppBank>
          <SocialMedia>
            <Fb><FaFacebookSquare /></Fb>
            <Twit><FaTwitter /></Twit>
            <Ig><FaInstagram /></Ig>
            <Linked><FaLinkedin /></Linked>
            <Youtube><FaYoutube /></Youtube>
            <Pinterest><FaPinterest /></Pinterest>
          </SocialMedia>
          <CopyWright>
            <Btn>
              English ^
            </Btn>
            <P>
            ©2001-2021 All Rights Reserved. Mailchimp® is a registered trademark of The 
            Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc.,
             registered in the U.S. and other countries. Mac App Store is a service mark of
            Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc.
            Privacy & Terms
            </P>
          </CopyWright>
        </SecondRow>
      </FooterWrap>
    </>
  )
}

export default Footer;