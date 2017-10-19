import React, { Component } from 'react';
import '../styles/StaticNav.css';

class StaticNav extends Component {
  render() {
    return (
      <div className='static-nav'>
        <div className='logo'>shell.</div>
        <div>about.</div>
        <div>source code.</div>
      </div>
    )
  }
}

export default StaticNav;