import React from 'react'
import { useState } from 'react'
function UserStatusDiffExample() {
const [movies,setMovies] = useState({
    title:"Fast and furious",
    rating:9
})
const changeMovie = () => {
    movies.title === "Fast and furious" ? 
    setMovies({
        ...movies,
        title:'Cars'
    })
    : setMovies({
        ...movies,
        title:"Fast and furious"
    })
}
  return (
    <div>
        <h1>{movies.title}</h1>
        <h1>{movies.rating}</h1>
        <button onClick={changeMovie}>Change The movie</button>
    </div>
  )
}

export default UserStatusDiffExample