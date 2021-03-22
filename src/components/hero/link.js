import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Anchor = styled.a`
  width: 100px;
  height: auto;
  background: #007c89;
  color: #fff;
  font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
  font-weight: 600;
  font-size: .9375rem;
  padding: 1.25rem 2.5rem;
`;


const Link = ({name, direction}) => {
  return(
    <>
      <Anchor href={direction}>
       {name}
      </Anchor>
    </>
  )
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired
};


export default Link;