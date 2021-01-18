import {createSlice} from '@reduxjs/toolkit';
import { logIn, signUp } from '../actions/user';

const initialState = {
  logInLoading: false,//
  logInDone: false,
  logInError: null,
  logInData: null,
  signUpLoading: false,//
  signUpDone: false,
  signUpError: null,
  signUpData: null,
}

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
  .addCase(signUp.pending, (state, action) => {
    state.signUpData = null;
    state.signUpLoading = true;
    state.signUpDone = false;
    state.signUpError = null;
  })
  .addCase(signUp.fulfilled, (state, action) => {
    state.signUpData = action.payload;
    state.signUpDone = true;
    state.signUpLoading = false;
  })
  .addCase(signUp.rejected, (state, action) => {
    state.signUpError = action.payload;
    state.signUpLoading = false;
  })
  .addCase(logIn.pending, (state, action) => {
    state.logInData = null;
    state.logInLoading = true;
    state.logInDone = false;
    state.logInError = null;
  })
  .addCase(logIn.fulfilled, (state, action) => {
    state.logInData = action.payload;
    state.logInDone = true;
    state.logInLoading = false;
  })
  .addCase(logIn.rejected, (state, action) => {
    state.logInError = action.payload;
    state.logInLoading = false;
  })
})

export default userSlice;