import React from 'react'
import { Layout } from 'antd';
import NavLeft from '../components/NavLeft'
import LHeader from '../components/Header'
import LFooter from '../components/Footer'
const { Sider, Content } = Layout;

const LayOut = (props) => {
  return (
    <Layout>
      {/* <Sider> */}
        <NavLeft />
      {/* </Sider> */}
      <Layout>
        <LHeader />
        <Content>{props.children}</Content>
        <LFooter />
      </Layout>
    </Layout>
  )
}

export default LayOut;