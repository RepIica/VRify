import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';
// import AScene from './components/AScene.js'
import Ui from './components/Ui.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>VRifiy</h1>
        </div>
        {/* <Ui /> */}
        <Login />

      </React.Fragment>
    );
  }
}

export default App;
