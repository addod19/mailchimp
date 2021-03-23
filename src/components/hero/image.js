import React from 'react';

import direction from '../../assets/images/logoh.png'

import styled from 'styled-components';

const ImgPos = styled.div`
  position: relative;
  top: 30%;
`;

const Img = styled.img`
  width: 350px;
  height: 320px;
  position: relative;
  top: 30%;
  left: 10%;
`;

const Image = () => {
  return(
    <ImgPos>
      <Img src={direction} alt="main image" />
    </ImgPos>
  )
}


export default Image;