import React from "react";

const Greeting = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <h2>Good Morning</h2>
  ) : timeOfDay === "afternoon" ? (
    <h2>Good Aftenoon</h2>
  ) : (
    "Good Morning"
  );
};

export default Greeting;
