import React, { Component } from 'react';
import '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='logo'>shell.</div>
        <div>about.</div>
        <div>source code.</div>
      </div>
    )
  }
}

export default NavBar;
