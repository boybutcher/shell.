import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/MediaPlayer.css';

class MediaPlayer extends Component {
  render() {
    const {
      mediaData
    } = this.props;
    console.log('mediaData: ', mediaData);

    const playerSrc = mediaData[0] ? mediaData[0].id.videoId : '_lAjs75dkho';

    console.log('playerSrc: ', playerSrc);

    return (
      <div className='media-player'>
        <iframe
          width='100%'
          height='100%'
          src={`http://www.youtube.com/embed/${playerSrc}?autoplay=1&controls=0&disablekb=1&loop=1&rel=0&iv_load_policy=3`}>
        </iframe>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return  {
    mediaData: state.queue.mediaData,
  }
}

MediaPlayer = connect(mapStateToProps)(MediaPlayer);

export default MediaPlayer;
