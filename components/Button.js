import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { url, text } = props;
  return (
    <a href={url} target="_blanc" className="button">
      {text}
      <style jsx>
        {`
          .button {
            margin: 70px auto 70px auto;
            font-style: italic;
            color: white;
            font-size: 25px;
            padding: 15px;
            text-decoration: none;
            border: 4px solid #ff54b0;
            box-sizing: border-box;
          }

          @media (max-width: 570px) {
            .button {
              font-size: 20px;
              padding: 0px;
            }
          }
        `}
      </style>
    </a>
  );
};

Button.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  url: 'https://t.me/joinchat/Ew15LEePsg6RSO40ebtFrg',
  text: 'Вот наш чат в телеграме',
};

export default Button;
