import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <div className="footer-logo">
          <img
            src="/icons_assets/logo-white.png"
            className="site-footer-logo"
            alt="Little Lemon logo"
          />
        </div>
        <div>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About</li>
            <li>Menu</li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>678 Pisa Ave, Chicago, IL 60611</li>
            <li>(312) 593-2744</li>
            <li>customer@littlelemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
