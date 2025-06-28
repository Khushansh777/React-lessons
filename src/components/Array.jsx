import React from 'react'

const Array = () => {
    const num = [1,2,3,4,5];
  return (
    <div>
        {num.map(number => (
            <ul key={number}>
                <li>{number}</li>
            </ul>
        ))}
    </div>
  )
}

export default Array