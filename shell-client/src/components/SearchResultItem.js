import React, { Component } from 'react';
import '../styles/SearchResultItem.css';

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
      <div 
        className='search-result-item'
        id={this.props.id}
        onClick={this.props.clickHandler}>
        <img src={url} />
        <div>{title}</div>
      </div>
    )
  }
}

export default SearchResultItem;
