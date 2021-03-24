import React from 'react';

import styled from 'styled-components';

const H1 = styled.h1`
  padding: 40px;
  font-size: 52px;
  width: 50%;
  margin-left: 25%;
  text-align: center;
`;

const Header = () => {
  return(
    <>
      <H1>See how it all comes together</H1>
    </>
  )
}

export default Header;