import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          &copy; {new Date().getFullYear()} GeoPostcodes. All rights reserved.
        </p>
        <nav className="footer__links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
