import React from 'react';

const Information = props => (
  <p className="information">
    {props.text}

    <style jsx>{`
      .information {
        margin: auto;
        padding-bottom: 30px;
        font-size: 25px;
        width: 100%;
      }
      @media (max-width: 570px) {
        .information {
          font-size: 13px;
        }
      }
    `}</style>
  </p>
);

export default Information;
