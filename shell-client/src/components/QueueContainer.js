import React, { Component } from 'react';
import { connect } from 'react-redux';
import QueueItem from './QueueItem';
import '../styles/QueueContainer.css';

class QueueContainer extends Component {
  render() {
    const {
      mediaData,
    } = this.props;
    return (
      <div className='queue-container'>
        {
          mediaData.map(mediaItem => {
            return <QueueItem />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mediaData: state.queue.mediaData,
  }
}

QueueContainer = connect(mapStateToProps)(QueueContainer);

export default QueueContainer;
