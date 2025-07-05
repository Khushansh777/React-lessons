import React, { useEffect, useState } from "react";

function Countereffect() {
    const [count,setcount] = useState(0);
    useEffect(() =>{
        document.title = count;
    },[count])
  return (
    <div>
      <h1>Countereffect </h1>
      <button onClick={() =>{setcount(count + 1)}}>Add</button>
      <button onClick={() =>{setcount(count - 1)}}>Substract</button>
    </div>
  );
}

export default Countereffect;
