import React from 'react';

import styled from 'styled-components';

const Text2 = styled.div`
  width: 60%;
  position: relative;
  top: 30%;
  left: 25%; 
`;

const H3 = styled.h3`
 font-size: 1.3em;
`;

const Description = () => {
  return(
    <Text2>
      <H3>
        Mailchimp helps small business do big things, with the right
        tools and guidance every step of the way.
      </H3>
    </Text2>
  )
}

export default Description;