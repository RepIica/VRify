import React, { Component } from 'react';
import Login from './components/Login.js';
// import AScene from './components/AScene.js'
import Ui from './components/Ui.js'
import SemNav from './components/SemNav.js'
import ImageFade from './components/ImageFade.js'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './adapters/authAdapter.js'
import { getProjects } from './adapters/projectsAdapter.js'
import { setSessionUser } from './actions/authActions.js'
import { removeSessionUser } from './actions/userActions.js'
import { saveProj, setProjects } from './actions/projectActions.js'

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      getCurrentUser(localStorage.getItem('token')).then((user) => {
        if (user) {
          this.props.setSessionUser(user)
          getProjects(user.id)
            .then(projectsData => {
              // console.log(projectsData)
              // console.log(projectsData.length)
              this.props.setProjects(projectsData)
            })
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
  componentDidUpdate() {
    console.log('<App/> componentDidUpdated')
    if (localStorage.getItem('token')) {
      getCurrentUser(localStorage.getItem('token')).then((user) => {
        if (user) {
          getProjects(user.id)
            .then(projectsData => {
              // console.log(projectsData)
              // console.log(projectsData.length)
              this.props.setProjects(projectsData)
            })
        } else {
          this.logout()
        }
      })
    }
  }

  logout = () => {
    localStorage.removeItem('token')
    console.log('App.logout() ran. Browser token removed')
    this.props.removeSessionUser()
  }

  saveProject = () => {
    // const fileContent = document.documentElement.innerHTML;
    const fileContent = document.getElementsByTagName('a-scene')[0].innerHTML;
    const name = this.promptProjectName()
    const projToSave = {
      fileContent,
      name,
      userId: this.props.currentUser.id
    }
    if (name) {
      this.props.saveProj(projToSave)
    }
  }

  promptProjectName = () => {
    let projName = prompt(`Please enter project name, ${this.props.currentUser.name}`);
    if (projName){ // validations
      if(projName.includes(" ")){
        alert('Please do not include spaces in your project name')
        return null
      }
      // eslint-disable-next-line
      else if( projName.match(/[\<\>!@#\$%^&\*,]+/i) || projName ==="") {
        alert('Inavlid project name, please try again.');
        return null
      }
      else{ // valid Project Name, returns it
        console.log("Your Project Name is " + projName)
        return projName
      }
    }else{
      alert('No project name entered, please try again.');
      return null
    }
  }



  render() {
    return (
      <React.Fragment>

        <SemNav
          logout={this.logout}
          save={this.saveProject}
          history={this.props.history}
          // setProj={()=>{console.log('dispatch currentproj to store')}}
        />

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

export default withRouter(connect(mapStateToProps, { setSessionUser, removeSessionUser, saveProj, setProjects })(App));
