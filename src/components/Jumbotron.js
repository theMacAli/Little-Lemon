import React from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <section className="hero">
      <div className="grid container">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button className="button-primary">Reserve a table</button>
          </Link>
        </div>
        <img
          className="hero-image"
          src="/icons_assets/restauranfood.jpg"
          alt="restaurant food"
        />
      </div>
    </section>
  );
}

export default Jumbotron;
