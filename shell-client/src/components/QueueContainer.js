import React, { Component } from 'react';
import QueueItem from './QueueItem';
import '../styles/QueueContainer.css';

class QueueContainer extends Component {
  render() {
    return (
      <div className='queue-container'>
        <QueueItem />
        <QueueItem />
        <QueueItem />
      </div>
    )
  }
}

export default QueueContainer;
