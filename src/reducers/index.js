import { combineReducers } from 'redux';

import StudentReducer from './studentReducer';

export default combineReducers({
    student : StudentReducer
})