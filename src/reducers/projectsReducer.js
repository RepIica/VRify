import {SAVE_PROJ, GET_PROJS, LOGIN_USER} from '../actions/types.js'

const initialState = {
  currentUser: null,
  users: [],
  currentProject: null,
  projects: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case LOGIN_USER:
    console.log('hit projectsReducer');
      return {
        ...state,
        projects: action.projects
      }
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
