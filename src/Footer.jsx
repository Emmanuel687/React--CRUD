import React from "react";
import "./Footer.css"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p className="copy-right">Copyright {year}</p>

    </div>
  );
};

export default Footer;
