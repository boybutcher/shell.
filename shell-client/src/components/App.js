import React, { Component } from 'react';
import NavBar from './NavBar.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test() {
    return fetch(`/`)
      .then(response => {
        console.log('response: ', response)
        return response.json()
      }).then(readable => {
        console.log('readable: ', readable)
      })
      .catch(error => {
        console.error(`error: ${error}`);
      })
  }

  componentWillMount() {
    this.test();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
