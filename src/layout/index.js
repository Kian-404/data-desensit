import React from 'react'
import { Layout } from 'antd';
import './index.less'
import NavLeft from '../components/NavLeft'
import LHeader from '../components/Header'
import LFooter from '../components/Footer'
const { Content } = Layout;

const LayOut = (props) => {
  return (
    <Layout className="layout">
      <NavLeft />
      <Layout>
        <LHeader />
        <Content className="content">{props.children}</Content>
        <LFooter />
      </Layout>
    </Layout>
  )
}

export default LayOut;