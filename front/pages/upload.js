import React, { useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "antd";
import { FormStyle, ButtonMargin } from "../styled";
import { uploadImage, addPost } from "../actions/post";

const Upload = () => {
  const dispatch = useDispatch();

  const uploadData = useSelector((state) => state.post.uploadData);

  const [price, setPrice] = useState("");
  const onChangePrice = useCallback((e) => {
    setPrice(e.target.value);
  }, []);

  const [product, setProduct] = useState("");
  const onChangeProduct = useCallback((e) => {
    setProduct(e.target.value);
  }, []);

  const [information, setInformation] = useState("");
  const onChangeInfomation = useCallback((e) => {
    setInformation(e.target.value);
  }, []);

  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImageUpload = useCallback(
    (e) => {
      console.log(e.target.files[0]);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append("image", f);
      });
      dispatch(
        uploadImage({
          imageFormData,
        })
      );
    },
    [price, product, information]
  );

  const onSubmit = useCallback(() => {
    if (uploadData) {
      const postFormData = new FormData();
      postFormData.append("price", price);
      postFormData.append("product", product);
      postFormData.append("information", information);
      postFormData.append("image", uploadData);
      dispatch(addPost({postFormData,})
      );
    } else {
      alert('이미지를 업로드해주세요');
    }
  }, [price, product, information, uploadData]);

  return (
    <>
      <FormStyle encType="multipart/form-data" onFinish={onSubmit}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <input
            type="file"
            name="image"
            hidden
            ref={imageInput}
            onChange={onChangeImageUpload}
          />
          <Button
            style={{ width: "15%", height: "32vh" }}
            onClick={onClickImageUpload}
          >
            이미지업로드
          </Button>
          {uploadData && (
            <img
              style={{ width: "15%", height: "32vh", marginLeft: "10px" }}
              src={`http://localhost:3065/${uploadData}`}
            />
          )}
        </div>
        <br />
        <div style={{ width: "30%" }}>
          <label htmlFor="price">가격(원)</label>
          <Input
            name="price"
            type="number"
            value={price}
            onChange={onChangePrice}
            required
          />
          <br />
          <br />
          <label htmlFor="product">제품 이름</label>
          <Input
            name="product"
            value={product}
            onChange={onChangeProduct}
            required
          />
          <br />
          <br />
          <label htmlFor="infomation">제품 설명</label>
          <Input.TextArea
            name="infomation"
            value={information}
            onChange={onChangeInfomation}
            required
          />
          <br />
          <br />
          <div style={{ float: "right"}}>
            <ButtonMargin type="primary" htmlType="submit">
              확인
            </ButtonMargin>
            <ButtonMargin>취소</ButtonMargin>
          </div>
        </div>
      </FormStyle>
    </>
  );
};

export default Upload;
