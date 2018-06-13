import { combineReducers } from 'redux'

import user from './user';
import {reducer as formReducer} from 'redux-form'
// import userRequest from './userRequest';
// import messages from './messages';
// import locations from './locations'
// import categories from './categories'

export default combineReducers({
    user,
    form: formReducer
})