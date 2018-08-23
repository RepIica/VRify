import {SAVE_PROJ,SET_PROJS} from './types'
import {postProj} from '../adapters/projectsAdapter.js'


export const saveProj = (proj) => {
  return (dispatch) => {
    postProj(proj)
      .then((data) =>{
        console.log(data)
        dispatch({ // action object
          type: SAVE_PROJ,
          payload: data
        })
      })
  }
}

export const setProjects = (projects) => {
  return (dispatch) => {
    //getProjects()?
    dispatch({
      type: SET_PROJS,
      payload: projects
    })
  }
}
