import React from "react";
import { Card } from "antd";
import PropTypes from "prop-types";
import Link from "next/link";

const CardComponent = ({ postData }) => {
  return (
    <Link href={`posts/${postData.id}`}>
      <a>
        <Card
          hoverable
          cover={
            <img
              style={{ height: "300px" }}
              src={`http://localhost:3065/${postData.Image.src}`}
            />
          }
        >
          <Card.Meta
            title={postData.product}
            description={`${postData.price}원`}
          />
        </Card>
      </a>
    </Link>
  );
};

CardComponent.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default CardComponent;
