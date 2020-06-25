const MenuList = [
  {
    title: '首页',
    key: '/home',
    icon:'SettingOutlined'
  },
  {
    title: '数据管理',
    key: '/2',
    icon:'SettingOutlined',
    children: [
      {
        title: '数据查询',
        key: '/3'
      },
      {
        title: '脱敏字段配置',
        key: '/4'
      },
      {
        title: 'SQL操作记录',
        key: '/5'
      },
    ]
  },
  {
    title: '审批管理',
    key: '/6',
    icon:'SettingOutlined',
    children: [
      {
        title: '发起审批',
        key: '/7'
      },
      {
        title: '审批列表',
        key: '/8'
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
    icon:'SettingOutlined',

    children: [
      {
        title: '发起审批',
        key: '/11'
      },
      {
        title: '审批列表',
        key: '/12'
      },
      {
        title: 'SQL操作记录',
        key: '/13'
      },
    ]
  },
  {
    title: '系统管理',
    key: '/14',
    icon:'SettingOutlined',

  }
]

export default MenuList;