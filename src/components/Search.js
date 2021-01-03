import React from 'react';



class Search extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

   render() {
    return (
      <div className="search-bar">

        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}

        />
        <button className="btn" onClick={() => this.props.handleSearchSubmit(this.state.search)}>
          <span className="search">Go!!!</span>
        </button>
      </div>
    );
  }

}

export default Search;