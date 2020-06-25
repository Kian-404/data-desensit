import React from 'react'
import { Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/MenuConfig'
import { connect } from 'react-redux'
import './index.less'
import { SettingOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
})
const SubMenu = Menu.SubMenu;
const { Sider } = Layout;
class NavLeft extends React.Component {
  state = {
    currentKey: ''
  }
  // 菜单点击
  handleClick = ({ item, key }) => {
    if (key === this.state.currentKey) {
      return false;
    }
    // 事件派发，自动调用reducer，通过reducer保存到store对象中
    // const { dispatch } = this.props;
    // dispatch(switchMenu(item.props.title));

    this.setState({
      currentKey: key
    });
    // hashHistory.push(key);
  };
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = (data) => {

    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key} icon={<SettingOutlined/>}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }
  homeHandleClick = () => {
    // const { dispatch } = this.props;
    // dispatch(switchMenu('首页'));
    this.setState({
      currentKey: ""
    });
  };
  render() {
    let { showMenu } = this.props;
    console.log(showMenu);
    debugger;
    return (
      <Sider trigger={null} collapsible collapsed={showMenu}>
        <div className="nav-left">
          <div className="sider-menu-logo">
            <NavLink to="/home" onClick={this.homeHandleClick}>
              <div className="logo">
                <h1 className="logo-text">Data Desensit</h1>
              </div>
            </NavLink>
          </div>
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="inline"
            inlineCollapsed={showMenu}
          >
            {this.state.menuTreeNode}
          </Menu>
        </div>
      </Sider>
    );
  }
}
const mapStateToProps = state => {
  return {
    showMenu: state.showMenu
  }
};
export default connect(mapStateToProps)(NavLeft)