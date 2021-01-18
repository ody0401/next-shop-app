import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux';
import { Input } from 'antd';
import {FormStyle, ButtonMargin} from '../styled';
import {signUp} from '../actions/user';

const SignUp = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const [password, setPassword] = useState('');
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const [passwordCheck, setPasswordCheck] = useState('');
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      dispatch((signUp({
        name,
        email,
        password,
      })))
    }
  }, [name, email, password, passwordCheck]);

  return (
    <>
      <FormStyle onFinish={onSubmit}>
        <div style={{ width: '15%' }}>
          <label htmlFor='user-name'>이름</label>
          <Input name='user-name' value={name} onChange={onChangeName} required />
          <br />
          <br />
          <label htmlFor='user-email'>이메일</label>
          <Input name='user-email' type='email' value={email} onChange={onChangeEmail} required />
          <br />
          <br />
          <label htmlFor='user-password'>비밀번호</label>
          <Input name='user-password' type='password' value={password} onChange={onChangePassword} required />
          <br />
          <br />
          <label htmlFor='user-passwordCheck'>비밀번호 확인</label>
          <Input name='user-passwordCheck' type='password' value={passwordCheck} onChange={onChangePasswordCheck} required />
          <br />
          <br />
          <div style={{ float: 'right' }}>
            <ButtonMargin type='primary' htmlType='submit'>확인</ButtonMargin>
            <ButtonMargin>취소</ButtonMargin>
          </div>
        </div>
      </FormStyle>
    </>
  );
}

export default SignUp
