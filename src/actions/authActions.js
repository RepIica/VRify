import {LOGIN_USER, SET_USER} from './types'
import {loginUser, getCurrentUser} from '../adapters/authAdapter.js'
import {getProjects} from '../adapters/projectsAdapter.js'

export const submitLogin = (email, password) => { //refactor to only dispatch user, separate other functionality to be called on .then of submitLogin() in Login.js component
  return (dispatch) => {
    loginUser(email,password)
      .then(data => {
        getCurrentUser(data.token)
        .then((user) => {
          localStorage.setItem('token', data.token)
          // this.props.history.push('/profile')
          dispatch({ // action object
            type: LOGIN_USER,
            user: user
          })
        })
      })
  }
}

export const setSessionUser = (user) => {
  return (dispatch) => {
    dispatch({ // action object
      type: SET_USER,
      user: user
    })
  }
}
