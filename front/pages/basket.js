import React from 'react'
import {useSelector} from 'react-redux';
import {Typography, List} from 'antd'
import BasketList from '../components/BasketList';

const {Title} = Typography;

const Basket = () => {
  return (
    <div style={{ width: "95%", margin: "3rem auto", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <div style={{width: "100%"}}>
        <Title level={2}> 장바구니 </Title>
        <hr />
      </div>
      <BasketList />
    </div>
  )
}

export default Basket;
