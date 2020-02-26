import React from 'react';
import PropTypes from 'prop-types';

const Disclaimer = props => {
  const { text } = props;
  return (
    <p className="disclaimer">
      {text}
      <style jsx>
        {`
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
        `}
      </style>
    </p>
  );
};

Disclaimer.propTypes = {
  text: PropTypes.string,
};

Disclaimer.defaultProps = {
  text:
    'Мы никого ни к чему не призываем, тем более не агитируем употреблять спиртные напитки! Всё это - постирония, иф ю ноу, вот ай мин!',
};

export default Disclaimer;
