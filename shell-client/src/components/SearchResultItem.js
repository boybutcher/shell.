import React, { Component } from 'react';

class SearchResultItem extends Component {
  render() {
    console.log('this.props.searchItemData: ', this.props.searchItemData);
    const {
      id: {
        videoId,
      },
      snippet: {
        title,
        thumbnails: {
          default: {
            url,
          }
        }
      }
    } = this.props.searchItemData;

    return (
      <div className='search-result-item'>
        <img src={url} />
        <div>{title}</div>
      </div>
    )
  }
}

export default SearchResultItem;