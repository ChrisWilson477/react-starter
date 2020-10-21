import React from 'react';
import MovieListEntry from './MovieListEntry.js';


var MovieList = ({movies}) => {

  return (


    <div className="movie-list">

    {movies.map(movie =>
      <MovieListEntry movie={movie}  />
    )}
  </div>
);
};





export default MovieList;
