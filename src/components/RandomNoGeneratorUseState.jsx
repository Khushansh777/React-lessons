import React from 'react'
import { useState } from 'react'
function RandomNoGeneratorUseState() {
    const  [rnadomNo,setRandomNo] = useState(
        Math.floor(Math.random() *100)
    );
    const generateRandomNo = () => {
        setRandomNo(Math.floor(Math.random() *100) );
    }
  return (
    <div>RandomNoGeneratorUseState:{rnadomNo}
      <button onClick={generateRandomNo}>generateRandomNo</button>
    </div>
    
  )
}

export default RandomNoGeneratorUseState