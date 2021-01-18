import React, { useCallback, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Typography} from 'antd';
import PropTypes from 'prop-types';
import {ButtonMargin} from '../styled';
import { addBasket } from '../actions/post';

const {Title} = Typography;

const ProductInfo = ({ id }) => {
  const dispatch = useDispatch();

  const loadProductInfoData = useSelector((state) => state.post.loadProductInfoData);

  const {product, information, price} = loadProductInfoData;

  const onClickBasket = useCallback(() => {
    const result = confirm('장바구니에 담으시겠습니까?')
    if (result) {
      dispatch(addBasket({
        id
      }))
    }
  }, [])

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div>
      <Title level={4}>상품이름: {product}</Title>
      <hr />
      </div>
      <div style={{height: '20vh'}}>
      <Title level={5}>상품정보: {information}</Title>
      </div>
      <div>
      <hr />
      <Title level={5}>가격: {price}원</Title>
      </div>
      <div style={{textAlign:'end'}}>
        <hr />
        <ButtonMargin type='primary' size={'large'}>구매하기</ButtonMargin>
        <ButtonMargin size={'large'} onClick={onClickBasket}>장바구니</ButtonMargin>
      </div>
    </div>
  )
}

ProductInfo.propTypes = {
  id: PropTypes.string.isRequired
}

export default ProductInfo
