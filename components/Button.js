import React from 'react';

const Button = props => (
  <a href={props.url} target="_blanc" className="button">
    {props.text}

    <style jsx>{`
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
    `}</style>
  </a>
);

export default Button;
