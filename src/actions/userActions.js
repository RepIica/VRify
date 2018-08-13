import {LOGOUT_USER} from './types'

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
