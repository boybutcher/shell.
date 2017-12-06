import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResultItem from './SearchResultItem.js';
import '../styles/SearchResults.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.addItemToQueue = this.addItemToQueue.bind(this);
  }

  addItemToQueue(e) {
    e.preventDefault();
    console.log(this.props.searchItems[e.currentTarget.id]);
  }

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
                key={index}
                id={index}
                clickHandler={this.addItemToQueue}
              />
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