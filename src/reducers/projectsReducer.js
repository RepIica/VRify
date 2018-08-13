import {SAVE_PROJ, GET_PROJS} from '../actions/types.js'

const initialState = {
  currentUser: null,
  users: [],
  currentProject: null,
  projects: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case SAVE_PROJ:
      return {
        ...state,
        currentProj: action.payload.name,

      }
      case GET_PROJS:
        return {
          ...state,
        }
    default:
      return state
  }
}
