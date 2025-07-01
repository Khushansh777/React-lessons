import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const handleIncreament  = () =>{
        setCount(count + 1);
    }
    const handleDecreament  = () =>{
        setCount(count - 1);
    }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleIncreament}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
    </div>
  )
}

export default Counter