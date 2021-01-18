import React from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu} from 'antd';

const AppLayout = ({ children }) => {
  return (
    <>
    <Menu mode='horizontal'>
      <Menu.Item><Link href='/'><a>홈페이지</a></Link></Menu.Item>
      <Menu.Item><Link href='/signup'><a>회원가입</a></Link></Menu.Item>
      <Menu.Item><Link href='/login'><a>로그인</a></Link></Menu.Item>
      <Menu.Item><Link href='/upload'><a>업로드</a></Link></Menu.Item>
      <Menu.Item><Link href='/basket'><a>장바구니</a></Link></Menu.Item>
    </Menu>
    {children}
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout
