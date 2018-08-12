import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';
// import AScene from './components/AScene.js'
import Ui from './components/Ui.js'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log('rendered');
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <p></p>
              <h1>VRify</h1>
            </div>
          </div>
          <hr/>
          {/* <Ui /> */}
          <Switch>
            <Route path="/profile" render={() => {
              return (this.props.currentUser ?
                <p>placeholder for profile</p>
                /* <React.Fragment>
                  <div className="col-sm-3 col-sm-offset-7" align="center">
                    <button className="btn btn-small" onClick={this.logout}>Logout</button>
                  </div>
                  <Profile user={this.props.currentUser}/>
                </React.Fragment> */
                : <Redirect to="/" />
              )
            }} />

            <Route path="/login" render={() => {
              return (this.props.currentUser ? <Redirect to="/" /> : <Login />)
            }} />

            <Route path="/signup" render={() => {
              return (
                <p>placeholder for signup</p>
                // <Signup />
              )
            }} />

            <Route path="/" render={() => {
              return (
                this.props.currentUser ?
                  <Ui />
                  : <Redirect to="/login" />
                )
            }}/>

        </Switch>
      </div>

      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    currentUser: state.authReducer.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(App));
