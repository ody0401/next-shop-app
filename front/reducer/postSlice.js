import {createSlice} from '@reduxjs/toolkit';
import { uploadImage, addPost, loadPost, loadProductInfo, addBasket } from '../actions/post';

const initialState = {
  uploadLoading: false, //upload
  uploadDone: false,
  uploadError: null,
  uploadData: null,
  addPostLoading: false, //addPost
  addPostDone: false,
  addPostError: null,
  addPostData: null,
  addBasketkLoading: false, //
  addBasketDone: false,
  addBasketError: null,
  addBasketData: [],
  loadPostLoading: false, //
  loadPostDone: false,
  loadPostError: null,
  loadPostData: [],
  loadProductInfoLoading: false, //
  loadProductInfoDone: false,
  loadProductInfoError: null,
  loadProductInfoData: [],
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    removeBasket(state, action) {
      state.addBasketData.splice(action.payload,1);
    },
    allRemoveBasket(state, action) {
      state.addBasketData = []
    }
  },
  extraReducers: (builder) => builder
  .addCase(uploadImage.pending, (state, action) => {
    state.uploadData = null;
    state.uploadLoading = true;
    state.uploadDone = false;
    state.uploadError = null;
  })
  .addCase(uploadImage.fulfilled, (state, action) => {
    state.uploadData = action.payload;
    state.uploadLoading = false;
    state.uploadDone = true;
  })
  .addCase(uploadImage.rejected, (state, action) => {
    state.uploadLoading = false;
    state.uploadError = action.payload;
  })
  .addCase(addPost.pending, (state, action) => {
    state.addPostData = null;
    state.addPostLoading = true;
    state.addPostDone = false;
    state.addPostError = null;
  })
  .addCase(addPost.fulfilled, (state, action) => {
    state.addPostData = action.payload;
    state.addPostLoading = false;
    state.addPostDone = true;
    state.uploadData = false;
  })
  .addCase(addPost.rejected, (state, action) => {
    state.addPostLoading = false;
    state.addPostError = action.payload;
  })
  .addCase(addBasket.pending, (state, action) => {
    state.addBasketLoading = true;
    state.addBasketDone = false;
    state.addBasketError = null;
  })
  .addCase(addBasket.fulfilled, (state, action) => {
    state.addBasketData.push(action.payload);
    state.addBasketLoading = false;
    state.addBasketDone = true;
  })
  .addCase(addBasket.rejected, (state, action) => {
    state.addBasketLoading = false;
    state.addBasketError = action.payload;
  })
  .addCase(loadPost.pending, (state, action) => {
    state.loadPostData = [];
    state.loadPostLoading = true;
    state.loadPostDone = false;
    state.loadPostError = null;
  })
  .addCase(loadPost.fulfilled, (state, action) => {
    state.loadPostData = action.payload;
    state.loadPostLoading = false;
    state.loadPostDone = true;
  })
  .addCase(loadPost.rejected, (state, action) => {
    state.loadPostLoading = false;
    state.loadPostError = action.payload;
  })
  .addCase(loadProductInfo.pending, (state, action) => {
    state.loadProductInfoData = [];
    state.loadProductInfoLoading = true;
    state.loadProductInfoDone = false;
    state.loadProductInfoError = null;
  })
  .addCase(loadProductInfo.fulfilled, (state, action) => {
    state.loadProductInfoData = action.payload;
    state.loadProductInfoLoading = false;
    state.loadProductInfoDone = true;
  })
  .addCase(loadProductInfo.rejected, (state, action) => {
    state.loadProductInfoLoading = false;
    state.loadProductInfoError = action.payload;
  })
})

export default postSlice;