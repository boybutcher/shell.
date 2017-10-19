import React, { Component } from 'react';
import '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <h1>shell.</h1>
        <div>about.</div>
        <div>source code.</div>
      </div>
    )
  }
}

export default NavBar;
