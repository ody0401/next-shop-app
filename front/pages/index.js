import { Button } from 'antd'
import React, { useCallback } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { loadPost } from '../actions/post';
import Product from '../components/Product';
import store from '../store';

const Home = () => {
  const dispatch = useDispatch();

  const loadPostData = useSelector((state) => state.post.loadPostData);

  const onClickLoad = useCallback(() => {
    dispatch(loadPost());
  } , [])
  
  return (
    <div>
      Home
      <Button onClick={onClickLoad}> 가져오기 </Button>
      <div>
        <Product />
      </div>
    </div>
  )
}

export default Home;
