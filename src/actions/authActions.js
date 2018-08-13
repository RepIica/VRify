import {LOGIN_USER, SET_USER} from './types'
import {loginUser, getCurrentUser} from '../adapters/authAdapter.js'

export const submitLogin = (email, password) => {
  return (dispatch) => {
    loginUser(email,password)
      .then(data => {
        getCurrentUser(data.token)
        .then((user) => {
          localStorage.setItem('token', data.token) //setting token so its not a pure function? refactor?
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
