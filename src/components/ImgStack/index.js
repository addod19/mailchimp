import React from 'react';

import styled from 'styled-components';

import mc from '../../assets/images/mc.png';

const ImgWrap = styled.section`
  width: 100%;
  position: relative;
  top: 30%;
`;

const ImgSrc = styled.img`
  position: relative;
  left: 30%;
  top: 10%;
`;
const ImgStack = () => {

  return(
    <>
      <ImgWrap>
        <ImgSrc src={mc} alt="over lap image" />
      </ImgWrap>
    </>
  )
}

export default ImgStack;