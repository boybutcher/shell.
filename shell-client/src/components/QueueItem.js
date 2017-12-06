import React, { Component } from 'react';
import '../styles/QueueItem.css';

class QueueItem extends Component {
  render() {
    console.log(this.props.mediaItemData);
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
    } = this.props.mediaItemData;

    return (
      <div 
        className='queue-item'
        id={this.props.id}>
        <img src={url} />
        <div>{title}</div>
      </div>
    )
  }
}

export default QueueItem;
