import React from 'react'
import { Layout } from 'antd';
import NavLeft from '../components/NavLeft'
import LHeader from '../components/Header'
import LFooter from '../components/Footer'
const { Content } = Layout;

const LayOut = (props) => {
  return (
    <Layout>
      <NavLeft />
      <Layout>
        <LHeader />
        <Content>{props.children}</Content>
        <LFooter />
      </Layout>
    </Layout>
  )
}

export default LayOut;