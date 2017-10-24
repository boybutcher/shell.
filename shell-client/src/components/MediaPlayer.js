import React, { Component } from 'react';
import '../styles/MediaPlayer.css';

class MediaPlayer extends Component {
  render() {
    return (
      <div className='media-player'>
        <iframe
          width='100%'
          height='75%'
          src='http://www.youtube.com/embed/PUZn1I6llJs?controls=0'>
        </iframe>
      </div>
    )
  }
}

export default MediaPlayer;
