import React, { Component } from 'react';

class MediaPlayer extends Component {
  render() {
    return (
      <div className='media-player'>
        <iframe width='640' height='390' src='http://www.youtube.com/embed/_lAjs75dkho?autoplay=1&controls=0'> </iframe>
      </div>
    )
  }
}

export default MediaPlayer;