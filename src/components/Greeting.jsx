import React from 'react'

const Greeting = () => {
    const name = 'Not John'
    const date = new Date()
  return (
    <div>
        <h1>{name}</h1>
        <p>{date}</p>
    </div>
  )
}

export default Greeting