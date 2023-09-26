import React from "react";
import Nav from "./Nav";
import "./Header.css";

function Header() {
  return (
    <header className="header">
        <img src="/icons_assets/Logo.svg" alt="Little Lemon logo"/>
      <Nav />
    </header>
  );
}

export default Header;
