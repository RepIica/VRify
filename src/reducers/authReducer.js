import {LOGIN_USER, GET_USER, GET_USERS, NEW_USER} from '../actions/types.js'

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
    default:
      return state
  }
}
