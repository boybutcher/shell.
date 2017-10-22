import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../root-reducer.js';
import NavBar from './NavBar.js';
import LeftPanel from './LeftPanel.js';
import MediaPlayer from './MediaPlayer.js';
import '../styles/App.css';

// const store = createStore(rootReducer);

class App extends Component {
  render() {
    //need to reimplement store => store={store}
    return (
      <Provider>
        <div className="App">
          <NavBar />
          <LeftPanel />
          <MediaPlayer />
        </div>
      </Provider>
    );
  }
}

export default App;
