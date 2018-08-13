import React, { Component } from 'react';
import Login from './components/Login.js';
// import AScene from './components/AScene.js'
import Ui from './components/Ui.js'
import Nav from './components/Nav.js'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './adapters/authAdapter.js'
import { setSessionUser } from './actions/authActions.js'
import { removeSessionUser } from './actions/userActions.js'

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      getCurrentUser(localStorage.getItem('token')).then((user) => {
        if (user) {
          this.props.setSessionUser(user)
        } else {
          this.logout()
        }
      })

    }
    // getUsers()
    //   .then(arr=>{
    //     this.setState(() => {
    //       return {
    //         users: arr
    //       }
    //     },()=>{console.log(this.state.users)})
    //   })

  }

  logout = () => {
    console.log('hit logout')
    localStorage.removeItem('token')
    console.log('App.logout() ran. Browser token removed')
    this.props.removeSessionUser()
  }

  render() {
    console.log('<App /> rendered');
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Nav logout={this.logout}/>
          {/* <div className="header">
            <div className="row">
              <div className="col-xs-12">
                <p></p>
                <h1 className="no-margin">VRify</h1>
                <button className="logout" onClick={this.logout}>Logout</button>
              </div>
            </div>
            <hr/>
          </div> */}
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

export default withRouter(connect(mapStateToProps, { setSessionUser, removeSessionUser })(App));
