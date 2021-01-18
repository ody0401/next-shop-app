import React, {useState, useCallback} from 'react'
import { useDispatch } from 'react-redux';
import {Input} from 'antd';
import {FormStyle, ButtonMargin} from '../styled';
import {logIn} from '../actions/user';

const LogIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const [password, setPassword] = useState('');
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(logIn({
      email,
      password,
    }))
  }, [email, password])

  return (
    <FormStyle onFinish={onSubmit}>
      <div style={{ width: '15%' }}>
        <label htmlFor='user-email'>이메일</label>
        <Input name='user-email' type='email' value={email} onChange={onChangeEmail} required />
        <br />
        <br />
        <label htmlFor='user-password'>비밀번호</label>
        <Input name='user-password' type='password' value={password} onChange={onChangePassword} required />
        <br />
        <br />
        <div style={{ float: 'right' }}>
          <ButtonMargin type='primary' htmlType='submit'>확인</ButtonMargin>
          <ButtonMargin >취소</ButtonMargin>
        </div>
      </div>
    </FormStyle>
  );
}

export default LogIn;
