import { combineReducers } from 'redux';
import authReducer from './authReducer'
//import top level reducers

const rootReducer = combineReducers({
  authReducer: authReducer
})

export default rootReducer;
