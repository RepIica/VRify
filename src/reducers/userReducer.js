//NOT IN USE YET
import {GET_USERS} from '../actions/types.js'

const initialState = {
  users: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      }
    default:
      return state
  }
}
