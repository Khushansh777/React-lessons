import React from 'react'
import { useState } from 'react'
function UseStateAdd() {
    const [content,setContent] = useState(11);
    const addNo = () => setContent(content + 1);
    const decNo = () => setContent(content -1);
  return (
    <div>
        <h1>{content}</h1>
        <button onClick={addNo}>Add</button>
        <button onClick={decNo}>Substract No</button>
    </div>
  )
}

export default UseStateAdd