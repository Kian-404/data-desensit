import React from 'react';
import { HomeOutlined, SettingOutlined, CodeOutlined, ApartmentOutlined, UserOutlined } from '@ant-design/icons'

const MenuList = [
  {
    title: '首页',
    key: '/home',
    icon: <HomeOutlined />
  },
  {
    title: '数据管理',
    key: '/2',
    icon: <CodeOutlined />,
    children: [
      {
        title: '数据查询',
        key: '/searchdata'
      },
      {
        title: '脱敏字段配置',
        key: '/dataconfig'
      },
      {
        title: 'SQL操作记录',
        key: '/optionhistory'
      },
    ]
  },
  {
    title: '审批管理',
    key: '/6',
    icon:  <ApartmentOutlined />,
    children: [
      {
        title: '发起审批',
        key: '/approvestatus'
      },
      {
        title: '审批列表',
        key: '/approvelist'
      },
      {
        title: 'SQL操作记录',
        key: '/9'
      },
    ]
  },
  {
    title: '用户管理',
    key: '/10',
    icon:  <UserOutlined />,

    children: [
      {
        title: '用户列表',
        key: '/11'
      },
      {
        title: '权限管理',
        key: '/12'
      },
      {
        title: '用户记录',
        key: '/13'
      },
    ]
  },
  {
    title: '系统管理',
    key: '/14',
    icon: <SettingOutlined />,

  }
]

export default MenuList;