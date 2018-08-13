import {LOGOUT_USER} from './types'
import {getUsers, createUser} from '../adapters/usersAdapter.js'

export const removeSessionUser = () => {
  return (dispatch) => {
    dispatch({ // action object
      type: LOGOUT_USER
    })
  }
}

export const setUsers = () => {
  return (dispatch) => {
    //getUsers()?
  }
}
