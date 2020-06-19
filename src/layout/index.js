import React from 'react'
import { Layout } from 'antd';
import NavLeft from '../components/NavLeft'
const { Header, Footer, Sider, Content } = Layout;
const LayOut = () => {
  return (
    <Layout>
      <Sider>
        <NavLeft />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default LayOut;