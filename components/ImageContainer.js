import React from 'react';

const ImageContainer = props => (
  <a href="/" className="image-container">
    {props.children}
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

export default ImageContainer;
