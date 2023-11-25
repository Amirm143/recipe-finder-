import React from "react";

const Footer = () => {
  return (
    <div className="footer container pt-5">
      <footer className="footer-section">
        <h4>TasteTreasure.com</h4>
        <p>&copy; {new Date().getFullYear()} TasteTreasure.com. All rights reserved.</p>
        <p>Proudly created by Team 586</p>
      </footer>
    </div>
  );
};

export default Footer;
