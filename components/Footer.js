import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="footer">
      {currentYear}, пивной четверг ®
      <style jsx>
        {`
          .footer {
            font-size: 12px;
          }
        `}
      </style>
    </p>
  );
};

export default Footer;
