import React from 'react';

import styled from 'styled-components';

const LinkWrap = styled.div`
  width: 60%;
  position: relative;
  top: 35%;
  left: 25%; 
`;
const Anchor = styled.a`
  width: 100px;
  height: auto;
  background: #007c89;
  color: #fff;
  font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
  font-weight: 600;
  font-size: .9375rem;
  padding: 1.25rem 2.5rem;
  text-decoration: none;
`;


const Link = () => {
  return(
    <LinkWrap>
      <Anchor href="#">
       Pick a Plan
      </Anchor>
    </LinkWrap>
  )
}


export default Link;