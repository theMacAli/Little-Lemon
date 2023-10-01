import React from "react";
import Nav from "./Nav";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center container grid">
      <Link to="/">
        <img
          src="/icons_assets/Logo.svg"
          alt="Little Lemon logo"
          height="70px"
          className="my-4"
        />
      </Link>

      <Nav />
    </header>
  );
}

export default Header;
