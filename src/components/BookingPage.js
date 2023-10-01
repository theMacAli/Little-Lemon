import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI  } from "../fakeAPI";
import { useNavigate } from 'react-router-dom';
import "./BookingPage.css"

export const updateTimes = (availableTimes, action) => {
  if (action.type === "change_date") {
    let changedDate = new Date(action.date);
    availableTimes = fetchAPI(changedDate);
    return availableTimes;
  }
};

function BookingPage(props) {
  const today = new Date();
  const initializeTimes = fetchAPI(today);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();
  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate("/booking-confirmed");
  };

  return (
    <div className="bookings">
      <h2>Book Now</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitData={submitData}
      />
    </div>
  );
}

export default BookingPage;
