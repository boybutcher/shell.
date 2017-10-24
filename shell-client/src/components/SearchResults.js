import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem.js';

class SearchResults extends Component {
  render() {
    return (
      <div className='search-results-container'>
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
    )
  }
}

export default SearchResults;