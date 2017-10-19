import React, { Component } from 'react';
import StaticNav from './StaticNav.js';
import UserNav from './UserNav.js';
import '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <StaticNav />
        <UserNav />
      </div>
    )
  }
}

export default NavBar;
