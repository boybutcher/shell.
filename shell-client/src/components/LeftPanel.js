import React, { Component } from 'react';
import QueueContainer from './QueueContainer';
import MediaSearch from './MediaSearch.js';
import '../styles/LeftPanel.css';

class LeftPanel extends Component {
  render() {
    return (
      <div className='left-panel'>
        <QueueContainer />
        <MediaSearch />
      </div>
    )
  }
}

export default LeftPanel;
