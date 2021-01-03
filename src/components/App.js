import React from 'react';
import MovieList from './MovieList.js';
import MovieListEntry from './MovieListEntry.js';
import MovieData from '../data/movieData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: ''
    }
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  this.addMovie = this.addMovie.bind(this);
  }


  handleSearchSubmit(val){
    var filteredMovies = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(val) !== -1});
        this.setState({
        movies: filteredMovies
      });
  }

  addMovie(event, movie){
    this.setState({movie: event.target.value})
  }




  render(){
    return(
    <div>
      <div>Movie List</div>
      <div>
        <MovieListEntry addMovie={this.addMovie} />
      </div>
      <div>
        <Search handleSearchSubmit={this.handleSearchSubmit} />
      </div>
      <div>
        <MovieList movies ={this.state.movies} />
      </div>
    </div>
  )}
}

export default App;
