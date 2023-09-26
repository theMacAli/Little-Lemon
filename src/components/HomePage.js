import React from "react";
import Jumbotron from "./Jumbotron";
import Specials from "./Specials";
import Testimonials from './Testimonials';
import Chicago from './Chicago';

function HomePage() {
  return (
    <>
      <Jumbotron />
      <Specials />
      <Testimonials />
      <Chicago />
    </>
  );
}

export default HomePage;
