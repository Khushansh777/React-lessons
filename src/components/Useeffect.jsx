import React, { useEffect, useState } from "react";

function Useeffect() {
  const [someVal, setsomeVal] = useState(0);
  useEffect(() =>{
    document.title = someVal;
    console.log('triggered Usereffect');
  },[someVal])
  return (
    <div>
      <h1>Useeffect</h1>
      <button onClick={() => setsomeVal(someVal + 1) }>Add</button>
      <button onClick={() => setsomeVal(someVal- 1) }>Substract</button>
    </div>
  );
}

export default Useeffect;
