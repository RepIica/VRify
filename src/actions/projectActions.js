import {SAVE_PROJ,GET_PROJS} from './types'
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

export const setProjects = () => {
  return (dispatch) => {
    //getProjects()?
    dispatch({
      type: GET_PROJS
    })
  }
}
