import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitMedia } from '../actions/queue-actions.js';

class MediaSubmission extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.submitMedia}>add to queue</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    submitMedia: () => {
      dispatch(submitMedia())
    }
  }
}

const MediaSubmissionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaSubmission);

export default MediaSubmissionContainer;