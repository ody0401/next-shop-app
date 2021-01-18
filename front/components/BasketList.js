import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Avatar, Button, List } from "antd";
import postSlice from "../reducer/postSlice";

const TdBorder = styled.td`
  border: 1px solid;
`;

const TrBorder = styled.td`
  border: 1px solid;
`;

const Basket = () => {
  const addBasketData = useSelector((state) => state.post.addBasketData);

  const dispatch = useDispatch();

  const onClickRemove = useCallback((i) => () => {
    dispatch(postSlice.actions.removeBasket(i));
  }, []);

  const onClickAllRemove = useCallback(() => {
    dispatch(postSlice.actions.allRemoveBasket());
  }, [])
  const renderItems = addBasketData.map((v, i) => {
    return (
      <tr key={i}>
        <TdBorder>
          <img
            style={{ width: "70px" }}
            src={`http://localhost:3065/${v.Image.src}`}
          />
        </TdBorder>
        <TdBorder>{v.product}</TdBorder>
        <TdBorder>{v.price} 원 </TdBorder>
        <TdBorder>
          <Button onClick={onClickRemove(i)}>제거</Button>
        </TdBorder>
      </tr>
    );
  });

  if (addBasketData.length == 0) {
    return <div>장바구니 상품이 없습니다.</div>;
  }
  return (
    <>
      <div>
        <table style={{ width: "800px", border: "1px solid" }}>
          <thead>
            <tr>
              <TrBorder>상품 이미지</TrBorder>
              <TrBorder>상품 이름</TrBorder>
              <TrBorder>상품 가격</TrBorder>
              <TrBorder>장바구니 제거</TrBorder>
            </tr>
          </thead>
          <tbody>{renderItems}</tbody>
        </table>
      </div>
      <div style={{width: '100%'}}>
        <br />
        <hr />
        <Button style={{float:'right'}} onClick={onClickAllRemove}>모두 제거</Button>
        <Button style={{float:'right', marginRight:'5px'}} type='primary' >구입하기</Button>
      </div>
    </>
  );
};

export default Basket;
