import React from 'react';
import './search.css';

const Search = () => {
    return (
        <div className="search-container">
          {/* <h1 className="h1">Hello</h1> */}
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
            />
            <button className="search-button">Search</button>
        </div>
    );
}

export default Search;
