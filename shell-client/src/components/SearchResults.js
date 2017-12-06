import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitMedia } from '../actions/queue-actions.js';
import SearchResultItem from './SearchResultItem.js';
import '../styles/SearchResults.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.addItemToQueue = this.addItemToQueue.bind(this);
  }

  addItemToQueue(e) {
    const {
      submitMedia,
      searchItems,
    } = this.props;

    const {
      id,
    } = e.currentTarget;

    e.preventDefault();
    submitMedia(searchItems[id]);
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

const mapDispatchToProps = dispatch => {
  return {
    submitMedia: data => {
      dispatch(submitMedia(data))
    },
  }
}

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);

export default SearchResultsContainer;