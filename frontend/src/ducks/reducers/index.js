import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import search from './search';
import user from './user';

export default combineReducers({ 
  user,
  form: formReducer })

