import React, { Component } from 'react';
import QueueContainer from './QueueContainer';
import MediaSubmission from './MediaSubmission';
import '../styles/LeftPanel.css';

class LeftPanel extends Component {
  render() {
    return (
      <div className='left-panel'>
        <QueueContainer />
        <MediaSubmission />
      </div>
    )
  }
}

export default LeftPanel;
