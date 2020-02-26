import React from 'react';
import PropTypes from 'prop-types';

const ImageContainer = props => {
  const { children } = props;
  return (
    <a href="/" className="image-container">
      {children}
      <style jsx>{`
        .image-container {
          margin: 40px auto;
        }
        .image-container img {
          width: 100%;
        }
      `}</style>
    </a>
  );
};

ImageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ImageContainer;
