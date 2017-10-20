import React, { Component } from 'react';
import QueueContainer from './QueueContainer';
import '../styles/LeftPanel.css';

class LeftPanel extends Component {
  render() {
    return (
      <div className='left-panel'>
        <QueueContainer />
      </div>
    )
  }
}

export default LeftPanel;
