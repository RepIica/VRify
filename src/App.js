import React, { Component } from 'react';
import './App.css';
import AScene from './components/AScene.js'
import Aincraft from './components/Aincraft.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>VRifiy</h1>
        </div>
        <Aincraft />

      </React.Fragment>
    );
  }
}

export default App;
