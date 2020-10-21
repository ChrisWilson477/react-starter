import React from 'react';
import MovieList from './MovieList.js';
import MovieData from '../data/movieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }




  render(){
    return(
    <div>
      <div>
        <Search />
      </div>
      <div>
        <MovieList movies ={MovieData} />
      </div>
    </div>
  )}
}

export default App;
