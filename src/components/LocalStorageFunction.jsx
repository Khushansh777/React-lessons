import React, { useEffect, useState } from 'react'

function LocalStorageFunction() {
  const [name,setName] = useState(() =>{
    const name  = localStorage.getItem('name')
    return name ? JSON.parse(name) : ''
  })

  useEffect(() =>{
    localStorage.setItem('name', JSON.stringify(name))
  },[name]);

  const handleChange = (e) =>{
    setName(e.target.value);
  }
return (
 
  <div>
    <h1>Name:{name}</h1>
    <input type="text" value={name} onChange={handleChange} placeholder='Enter Your Name'/>
  </div>
)

}

export default LocalStorageFunction