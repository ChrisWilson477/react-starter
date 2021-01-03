import React from 'react';


var MovieListEntry = ({ movie, addMovie }) => {

  return (

  <div className="addMovie-bar">
  <input
    type="text"
    value={movie}
    onChange={addMovie}
  />
  <button className="btn" onClick={() => addMovie(movie)}>
    <span className="addMovie">Add Movie</span>
  </button>
</div>
  )
}


export default MovieListEntry;