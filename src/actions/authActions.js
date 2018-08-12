import {LOGIN_USER, GET_USER, GET_USERS, NEW_USER} from './types'
import {loginUser, getCurrentUser} from '../adapters/authAdapter.js'

export const submitLogin = (email, password) => {
  return (dispatch) => {
    loginUser(email,password)
      .then(data => {
        getCurrentUser(data.token)
        .then((user) => {
          localStorage.setItem('token', data.token)
          // this.props.history.push('/profile')
          dispatch({ // action object
            type: LOGIN_USER,
            payload: data.token,
            user: user
          })
        })
      })
  }
}

export const getUsers = () => {
  return (dispatch) => {
    //getUsers()
  }
}
