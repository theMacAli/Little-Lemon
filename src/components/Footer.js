import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/icons_assets/Logo.svg" alt="Little Lemon logo" />
      </div>
      <div>
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
