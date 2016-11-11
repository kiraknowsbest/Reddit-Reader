import React from 'react';

const Search = (props) => (
  <div className="filter-container">
    <input placeholder="Search current page" type="text" id="search-text" className="filter-input" onChange={props.focused}/>
    <div className="filter-button" onClick={props.filter}>
      Search
    </div>    
  </div>
);

export default Search;