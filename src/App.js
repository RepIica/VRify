import React, { Component } from 'react';
import Login from './components/Login.js';
// import AScene from './components/AScene.js'
import Ui from './components/Ui.js'
import SemNav from './components/SemNav.js'
import ImageFade from './components/ImageFade.js'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './adapters/authAdapter.js'
import { setSessionUser } from './actions/authActions.js'
import { removeSessionUser } from './actions/userActions.js'
import { saveProj } from './actions/projectActions.js'

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
    localStorage.removeItem('token')
    console.log('App.logout() ran. Browser token removed')
    this.props.removeSessionUser()
  }

  saveProject = () => {
    // const fileContent = document.documentElement.innerHTML;
    const fileContent = document.getElementsByTagName('a-scene')[0].innerHTML;
    debugger
    const name = this.projectName()
    const projToSave = {
      fileContent,
      name,
      userId: this.props.currentUser.id
    }
    if (name) {
      this.props.saveProj(projToSave)
      window.location.reload()
    }else{
      console.error('invalid project name');
    }
  }

  projectName = () => {
    let projectName = prompt(`Please enter project name, ${this.props.currentUser.name}`);
      if (projectName != null) {
          console.log("Your Project Name is " + projectName)
          return projectName
      }else{
        return null
      }
  }



  render() {

    console.log('<App /> rendered');
    return (
      <React.Fragment>

        <SemNav logout={this.logout} save={this.saveProject} history={this.props.history}/>

        <Switch>
          <Route path="/profile" render={() => {
            return (this.props.currentUser ?
              <p>placeholder for profile</p>
              /* <Profile user={this.props.currentUser}/> */
              : <Redirect to="/" />
            )
          }} />

          <Route path="/login" render={() => {
            return (this.props.currentUser ? <Redirect to="/" /> : <Login />)
          }} />

          <Route path="/signup" render={() => {
            return (
              <ImageFade />
              // <p>placeholder for signup</p>
              // <Signup />
            )
          }} />

          <Route path="/" render={() => {
            return (
              this.props.currentUser ?
              <Ui/>
              : <Redirect to="/login" />
            )
          }}/>

        </Switch>


      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    currentUser: state.authReducer.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { setSessionUser, removeSessionUser, saveProj })(App));
