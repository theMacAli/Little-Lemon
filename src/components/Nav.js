import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid d-flex justify-content-end">
          <button
            class="navbar-toggler m-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body text-center">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 pt-2">
                <li class="nav-item">
                  <Link to="/" class="nav-link" >
                    Home
                  </Link>
                </li>
                <li class="nav-item" >
                  <Link to="/"class="nav-link" >
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link" >
                    Menu
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/booking" class="nav-link" >
                    Reservations
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link" >
                    Order Online
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link" >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
