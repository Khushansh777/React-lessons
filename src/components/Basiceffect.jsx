import React, { useEffect } from "react";

function Basiceffect() {
  useEffect(() => {
    console.log("loded");
  }, []);
  return (
    <div>
      <h1>Basiceffect</h1>
    </div>
  );
}

export default Basiceffect;
