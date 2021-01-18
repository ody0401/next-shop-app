import React, { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import {useDispatch, useSelector} from 'react-redux';
import { Button, Col, Typography, Row } from 'antd';
import { loadProductInfo } from '../../actions/post';
import ProductInfo from '../../components/ProductInfo'

const {Title} = Typography;

const Posts = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loadProductInfoData = useSelector((state) => state.post.loadProductInfoData);

  const ImageSrc = loadProductInfoData?.Image;

  const { id } = router.query;

  const onClickLoad = useCallback(() => {
    dispatch(loadProductInfo({
      id
    }))
  }, [])
  
  return (
    <div style={{ width: "95%", margin: "3rem auto" }}>
      <Title level={2}> 상품 정보 </Title>
      <hr />
      <Button onClick={onClickLoad}>불러오기</Button>
      <Row>
        <Col xs={24} md={12} >
          {ImageSrc &&<img style={{display:'block', width: '70%', height: '60vh', margin:'auto auto'}} src={`http://localhost:3065/${ImageSrc.src}`}/>}</Col>
        <Col xs={24} md={12}><ProductInfo id={id} /></Col>
      </Row>
    </div>
  )
}

export default Posts
