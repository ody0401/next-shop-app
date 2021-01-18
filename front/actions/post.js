import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3065'


export const uploadImage = createAsyncThunk('post/upload', async (data, thunkAPI) => {
  const result = await axios.post('/post/upload', data.imageFormData);
  return result.data;
});

export const addPost = createAsyncThunk('post/addPost', async (data, thunkAPI) => {
  console.log(data);
  const result = await axios.post('/post/addpost', data.postFormData);
  return result.data;
});

export const loadPost = createAsyncThunk('post/loadPost', async (data, thunkAPI) => {
  console.log(data);
  const result = await axios.get('/post/loadpost');
  return result.data;
});

export const loadProductInfo = createAsyncThunk('post/loadProductInfo', async (data, thunkAPI) => {
  console.log(data.id);
  const result = await axios.get(`/post/loadproduct/${data.id}`);
  return result.data;
});

export const addBasket = createAsyncThunk('post/addBasket', async (data, thunkAPI) => {
  console.log(data);
  const result = await axios.post('/post/addbasket', data);
  return result.data;
});