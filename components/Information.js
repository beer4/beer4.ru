import React from 'react';
import PropTypes from 'prop-types';

const Information = props => {
  const { text } = props;
  return (
    <p className="information">
      {text}

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
};

Information.propTypes = {
  text: PropTypes.string,
};

Information.defaultProps = {
  text: 'Совсем скоро тут появится информация!!!1',
};
export default Information;
