import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Typography, Card } from "antd";
import CardComponent from "./CardComponent";

const { Title } = Typography;

const Product = () => {
  const loadPostData = useSelector((state) => state.post.loadPostData);

  if (loadPostData.length == 0) {
    return <div>hi</div>;
  }

  const loadPosts = loadPostData.map((v, i) => {
    return (
      <Col xs={24} md={4} key={i} style={{ width: '80%'}}>
        <CardComponent postData={v} />
      </Col>
    );
  });

  return (
    <div style={{ width: "95%", margin: "3rem auto" }}>
      <Title level={2}> 상품 목록 </Title>
      <hr />

      <Row gutter={[16, 16]}>{loadPosts}</Row>
    </div>
  );
};

export default Product;
