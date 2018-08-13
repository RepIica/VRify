import { combineReducers } from 'redux';
import authReducer from './authReducer'
import userReducer from './userReducer'
//import top level reducers

const rootReducer = combineReducers({
  authReducer: authReducer, //refactor
  userReducer
})

export default rootReducer;
