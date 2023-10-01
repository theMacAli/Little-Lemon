import React, { useState } from "react";
import "./BookingForm.css";
import FormField from "./FormField";

function BookingForm({ availableTimes, dispatch, submitData }) {
  const minimumDate = new Date().toISOString().split("T")[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const invalidDateErrorMessage = "Please choose a valid date";
  const invalidTimeErrorMessage = "Please choose a valid time";
  const invalidOccasionErrorMessage = "Please choose a valid occasion";
  const invalidNumberOfGuestsErrorMessage =
    "Please enter a number between 1 and 10";

  const [form, setForm] = useState({
    date: minimumDate,
    time: availableTimes[0],
    numberOfGuests: 1,
    occasion: "Birthday",
  });

  const isDateValid = () => form.date !== "";
  const isTimeValid = () => form.time !== "";
  const isNumberOfGuestsValid = () =>
    form.numberOfGuests > 0 && form.numberOfGuests < 11;
  const isOccasionValid = () => form.occasion !== "";

  const areAllFieldsValid = () =>
    isDateValid() &&
    isTimeValid() &&
    isNumberOfGuestsValid() &&
    isOccasionValid();

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setForm({ ...form, date: selectedDate });
    console.log(form.date);

    dispatch({ type: "change_date", date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (areAllFieldsValid())
      submitData(form.date, form.time, form.numberOfGuests, form.occasion);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <FormField
          label="Choose date"
          htmlFor="res-date"
          hasError={!isDateValid()}
          errorMessage={invalidDateErrorMessage}
        >
          <input
            type="date"
            id="res-date"
            value={form.date}
            min={minimumDate}
            onChange={handleDateChange}
          />
        </FormField>

        <FormField
          label="Choose time"
          htmlFor="res-time"
          hasError={!isTimeValid()}
          errorMessage={invalidTimeErrorMessage}
        >
          <select
            id="res-time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
          >
            {availableTimes.map((time) => (
              <option data-testid="booking-time-option" key={time}>{time}</option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Number of guests"
          htmlFor="guests"
          hasError={!isNumberOfGuestsValid()}
          errorMessage={invalidNumberOfGuestsErrorMessage}
        >
          <input
            type="number"
            placeholder="1"
            min={minimumNumberOfGuests}
            max={maximumNumberOfGuests}
            id="guests"
            value={form.numberOfGuests}
            onChange={(e) =>
              setForm({ ...form, numberOfGuests: e.target.value })
            }
          />
        </FormField>

        <FormField
          label="Occasion"
          htmlFor="occasion"
          hasError={!isOccasionValid()}
          errorMessage={invalidOccasionErrorMessage}
        >
          <select
            id="occasion"
            value={form.occasion}
            onChange={(e) => setForm({ ...form, occasion: e.target.value })}
          >
            <option data-testid="booking-occasion-option" >Birthday</option>
            <option data-testid="booking-occasion-option">Anniversary</option>
          </select>
        </FormField>
        <input
          className="button-primary disabled-prop"
          type="submit"
          disabled={!areAllFieldsValid()}
          value="Make Your reservation"
        />
      </form>
    </div>
  );
}

export default BookingForm;
