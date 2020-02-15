import React from 'react';

const Footer = () => (
  <p className="footer">
    {new Date().getFullYear()}, пивной четверг ®
    <style jsx>{`
      .footer {
        font-size: 12px;
      }
    `}</style>
  </p>
);

export default Footer;
