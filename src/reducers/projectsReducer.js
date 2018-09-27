import {SAVE_PROJ, SET_PROJS, SET_COLOR} from '../actions/types.js'

const initialState = {
  currentProject: null,
  projects: null,
  currentColor: null,
  colors: [],
}

export default function (state = initialState, action) {
  switch(action.type) {
    case SAVE_PROJ:
      if (action.payload.name) {
        return {
          ...state,
          currentProject: action.payload,
          projects: [...state.projects, action.payload],
        }
      }else{
        console.error(action.payload)
        return {
          ...state,
        }
      }
    case SET_PROJS:
      return {
        ...state,
        projects: action.payload
      }
    case SET_COLOR:
      return {
        ...state,
        colors: [...state.colors, action.payload],
        currentColor: action.payload
      }
    default:
      return state
  }
}
