import React from 'react';

import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';
import logo from '../../assets/images/DF1.png';

const NavBar = styled.nav`
  width: 100%;
  min-height: 45px;
  background: #fcc203;
  color: black;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;

  &:hover {
    background: white;
  }
`;

const LeftLinks = styled.section`
  width: 40%;
`;

const ImageLink= styled.section`
  width: 30%;
`;

const RightLinks = styled.section`
  width: 30%;
`;

const UlLeftLinks = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  top: 10%
`;

const Li = styled.li`
  margin: 10px;
  list-style: none;
`;

const A = styled.a`
  text-decoration: none;
  line-height: 1.35;
  color: #403b3b;
  font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
`;

const UlRightLinks = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  left: 5%;
`;

const SearchLink = styled.a`
  color: black;
  text-decoration: none;
`;

const LoginBtn = styled.button`
  width: 100px;
  height: 45px;
  border: 1px solid black;
  background: #fcc203;

  &:hover {
    background: white;
    cursor: pointer;
  }
`;

const SignupBtn = styled.button`
  width: 110px;
  height: 45px;
  background: blue;
  border: none;
  color: white;
  background: #007c89;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;

const ImgLogo = styled.img`
  width: 20%;
  height: 40px;
  position: relative;
  left: 25%;
  top: 30px;
  border-radius: 50px;
`;
const Nav = () => {
  return(
    <>
      <NavBar className="nav">
        <LeftLinks className="leftLinks">
          <UlLeftLinks>
            <Li>
              <A href="#">Products</A>
            </Li>
            <Li>
              <A href="#">Resources</A>
            </Li>
            <Li>
              <A href="#">Inspiration</A>
            </Li>
            <Li>
              <A href="#">Pricing</A>
            </Li>
          </UlLeftLinks>
        </LeftLinks>
        <ImageLink className="imageLink">
          <ImgLogo src={logo} alt="icon logo" />
        </ImageLink>
        <RightLinks className="leftLinks">
          <UlRightLinks>
            <Li>
              <SearchLink href="#">
                <FaSearch className="icon" />
              </SearchLink>
            </Li>
            <Li>
              <LoginBtn>
                Log In
              </LoginBtn>
            </Li>
            <Li>
              <SignupBtn>
                Sign Up Free
              </SignupBtn>
            </Li>
          </UlRightLinks>
        </RightLinks>
      </NavBar>
    </>
  )
}

export default Nav;