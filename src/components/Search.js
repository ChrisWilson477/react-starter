import React from 'react';



var Search = (props) => {

    return (
      <div className="search-bar">
        <input
          type="text"
          value=''
        />
        <button className="btn">
          <span className="search"></span>
        </button>
      </div>
    );
  }

}

export default Search;