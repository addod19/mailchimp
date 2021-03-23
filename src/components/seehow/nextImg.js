import React from 'react';

import styled from 'styled-components';

import next from '../../assets/images/cvg.png';

const ImgWrap = styled.section`
  width: 100%;
  position: relative;
  // left: 30%;
  top: 3%;
`;

const ImgSrc = styled.img`
  position: relative;
  left: 30%;
  top: 10%;
`;

const NextImg = () => {
  return(
    <ImgWrap>
      <ImgSrc src={next} alt="" />
    </ImgWrap>
  )
}

export default NextImg;