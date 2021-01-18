import {combineReducers } from 'redux';
import postSlice from './postSlice';
import userSlice from './userSlice';

export default combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer,
})