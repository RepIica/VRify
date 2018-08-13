import { combineReducers } from 'redux';
import authReducer from './authReducer'
import userReducer from './userReducer'
import projectsReducer from './projectsReducer'
//import top level reducers

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  projectsReducer
})

export default rootReducer;
