import React, { Component } from 'react';
import '../styles/StaticNav.css';

class StaticNav extends Component {
  render() {
    return (
      <div className='static-nav'>
        <div className='logo'>shell.</div>
        <a>about.</a>
        <a
          href='https://github.com/boybutcher/shell.'
          target='_blank'
        >
          source code.
        </a>
      </div>
    )
  }
}

export default StaticNav;