import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResultItem from './SearchResultItem.js';
import '../styles/SearchResults.css';

class SearchResults extends Component {
  render() {
    const {
      searchItems,
    } = this.props;

    return (
      <div className='search-results-container'>
        {
          searchItems.map((searchItemData, index) => {
            return (
              <SearchResultItem
                searchItemData={searchItemData}
                key={index}/>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchItems: state.searchResults.searchItems,
  }
}

const SearchResultsContainer = connect(
  mapStateToProps,
)(SearchResults);

export default SearchResultsContainer;