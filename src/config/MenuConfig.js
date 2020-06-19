const MenuList = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: '数据管理',
    key: '/home',
    children: [
      {
        title: '数据查询',
        key: '/home'
      }, {
        title: '脱敏字段配置',
        key: '/home'
      }, {
        title: 'SQL操作记录',
        key: '/home'
      },
    ]
  },
  {
    title: '审批管理',
    key: '/home',
    children: [
      {
        title: '发起审批',
        key: '/home'
      }, {
        title: '审批列表',
        key: '/home'
      }, {
        title: 'SQL操作记录',
        key: '/home'
      },
    ]
  },
  {
    title: '用户管理',
    key: '/home',
    children: [
      {
        title: '发起审批',
        key: '/home'
      }, {
        title: '审批列表',
        key: '/home'
      }, {
        title: 'SQL操作记录',
        key: '/home'
      },
    ]
  },
  {
    title: '系统管理'
  }
]

export default MenuList;