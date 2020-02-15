import React from 'react';

const Disclaimer = props => (
  <p className="disclaimer">
    {props.text}
    <style jsx>{`
      .disclaimer {
        font-size: 8px;
        font-style: italic;
        letter-spacing: 0.1em;
        line-height: normal;
      }

      @media (max-width: 570px) {
        .disclaimer {
          font-size: 3px;
        }
      }
    `}</style>
  </p>
);

export default Disclaimer;
