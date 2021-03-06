import {LOGIN_USER, SET_USER, LOGOUT_USER} from '../actions/types.js'

const initialState = {
  currentUser: null,
  users: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.user,
      }
    case SET_USER:
      return {
        ...state,
        currentUser: action.user
      }
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null
      }
    default:
      return state
  }
}
