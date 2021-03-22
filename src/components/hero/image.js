import React from 'react';
import PropTypes from 'prop-types';

const Image = (direction, description) => {
  return(
    <>
      <img src={direction} alt={description} />
    </>
  )
}

Image.propTypes = {
  direction: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};


export default Image;