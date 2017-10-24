import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitMedia } from '../actions/queue-actions.js';
import '../styles/MediaSearch.css';

class MediaSearch extends Component {
  render() {
    return (
      <div className='media-search'>
        <div className='search-heading'>search.</div>
        <input
          className='query'
          type='text'>
        </input>
        <select
          className='search-sources'
          name='search-sources'>
          <option value='youtube'>YouTube</option> 
        </select>
        <button
          className='query-submit-button'
          onClick={this.props.submitMedia}>
          search
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    submitMedia: () => {
      dispatch(submitMedia())
    }
  }
}

const MediaSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaSearch);

export default MediaSearchContainer;