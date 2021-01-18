import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065'

export const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  const result = await axios.post('/user/login', data);
  console.log(result.data);
  return result.data;
});

export const signUp = createAsyncThunk('user/signUp', async (data, thunkAPI) => {
  console.log(data);
  const result = await axios.post('/user/signup', data);
  console.log(result.data);
  return result.data;
});