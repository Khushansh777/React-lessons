import React, { useState } from "react";

function Portal() {
  const [sw, setsw] = useState(true);

  const handleSwitch = () => {
    if (sw) {
      setsw(false);
    } else {

      setsw(true);
    }
  };

  return (
    <div>
      <span>{sw ? "Dark" : "Light"}</span>
      <br />
      <input type="text" key={sw ? "Dark" : "Light"} />
      <button onClick={handleSwitch}>Switch</button>
    </div>
  );
}

export default Portal;
