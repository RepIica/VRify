import {LOGIN_USER, SET_USER, LOGOUT_USER} from '../actions/types.js'

const initialState = {
  currentUser: {id: 3,
  name: "Lawrence",
  email: "lawrence@gmail.com",
  password_digest: "$2a$10$atvz57Q2Xa1RFj2R8fT5meUPbvDJsi88vb3gLpU1494snqFVXk/RK",
  created_at: "2018-08-14T14:16:34.134Z",
  updated_at: "2018-08-14T14:16:34.134Z"},
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
