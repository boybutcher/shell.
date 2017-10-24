import React, { Component } from 'react';
import '../styles/MediaPlayer.css';

class MediaPlayer extends Component {
  render() {
    return (
      <div className='media-player'>
        <iframe
          width='100%'
          height='100%'
          src='http://www.youtube.com/embed/_lAjs75dkho?controls=0'>
        </iframe>
      </div>
    )
  }
}

export default MediaPlayer;
