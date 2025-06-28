import React from "react";

const Weather = ({ temp }) => {
  return (
    <div>
      {temp < 15 && <h2>It's cold outside!</h2>}
      {temp >= 15 && temp < 25 && <h2>It's nice outside</h2>}
      {temp >= 25 && <h2>It's hot outside</h2>}
    </div>
  );
};

export default Weather;
