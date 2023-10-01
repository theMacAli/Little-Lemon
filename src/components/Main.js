import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {
  
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
        <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
