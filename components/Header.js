import React from 'react';
import Link from 'next/link';
import { Row, Col, Layout, Menu } from 'antd';
const { Header } = Layout;

const linkStyle = {
  marginRight: 15
};

export default () => (
  <Header className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key="1">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </Menu.Item>
    </Menu>
  </Header>
);
