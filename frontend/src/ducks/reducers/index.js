import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import search from './search';
import user from './user';
import order from './order';

export default combineReducers({ 
  user,
  search,
  order,
  form: formReducer })

