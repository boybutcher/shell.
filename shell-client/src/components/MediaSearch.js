import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitMedia } from '../actions/queue-actions.js';
import SearchResults from './SearchResults.js';
import '../styles/MediaSearch.css';

class MediaSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      source: 'youtube',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchSource = this.searchSource.bind(this);
  }

  handleInputChange(e) {
    const {
      name,
      value,
    } = e.target;

    this.setState({
      [name]: value,
    });
  }

  searchSource() {
    const {
      query,
      source,
    } = this.state;

    console.log(`searching for '${query}' at ${source}...`);

    fetch(`/${source}`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'query': query}),
    })
      .then(response => (
        response.json()
      ))
      .then(parseable => {
        console.log('parseable')
      })
  }



  render() {
    return (
      <div className='media-search'>
        <div className='search-heading'>search.</div>
        <input
          className='query'
          name='query'
          type='text'
          value={this.state.query}
          onChange={this.handleInputChange}>
        </input>
        <select
          className='search-sources'
          name='source'
          onChange={this.handleInputChange}>
          <option value='youtube'>YouTube</option>
          <option value='spotify'>Spotify (not implemented)</option>
        </select>
        <button
          className='query-submit-button'
          onClick={this.searchSource}>
          search
        </button>
        <SearchResults />
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