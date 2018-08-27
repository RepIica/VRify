import {SAVE_PROJ,SET_PROJS, SET_CURR_PROJ} from './types'
import {postProj} from '../adapters/projectsAdapter.js'


export const saveProj = (proj) => {
  return (dispatch) => {
    postProj(proj)
      .then((data) =>{
        if (data.hasOwnProperty('error')) {
          alert(`Sorry, you already have a project named ${proj.name}. Choose a different name.`)
          console.error(data)
          // why does page reload here???
        }else{
          dispatch({ // action object
            type: SAVE_PROJ,
            payload: data
          })
        }
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
export const setCurrentProject = (project) => {
  return (dispatch) => {
    dispatch({
      type: SET_CURR_PROJ,
      payload: project
    })
  }
}
