import React, { useState, useEffect } from 'react'
import { Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/MenuConfig'
import { connect } from 'react-redux'
import './index.less'
import Logo from '../../logo.svg';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

const NavLeft = (props) => {
  const [currentKey, setCurrentKey] = useState('');
  // const [MenuNode, setMenuNode] = useState(renderMenu(MenuConfig));

  const renderMenu = (data) => {
    let MenuList = data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={item.title}
            icon={item.icon}
          >
            {item.children &&
              item.children.map(menuItem => (
                <Menu.Item
                  key={menuItem.key}
                >
                  <NavLink to={menuItem.key}>{menuItem.title}</NavLink>
                </Menu.Item>
              ))}
          </SubMenu>
        )

      } else {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <NavLink to={item.key}>{item.title}</NavLink>
          </Menu.Item>
        )
      }

    });
    return MenuList;
  }
  let MenuNode = renderMenu(MenuConfig);
  // useEffect(() => {
  //   debugger;
  //   // setMenuNode(renderMenu(MenuConfig));

  // }, [MenuNode]);



  const handleClick = ({ item, key }) => {
    if (key === currentKey) {
      return false;
    }
    setCurrentKey(key);
  };
  const homeHandleClick = () => {
    setCurrentKey('')
  };
  let { showMenu } = props;
  return (
    <Sider trigger={null} collapsible collapsed={showMenu}>
      <div className="nav-left">
        <div className="sider-menu-logo">
          <NavLink to="/home" onClick={homeHandleClick}>
            <div className="logo">
              <img src={Logo} width="60px" height="60px" />
              {
                showMenu ? "" : <h1 className="logo-text">Data Desensit</h1>
              }
            </div>
          </NavLink>
        </div>
        <Menu
          onClick={handleClick}
          theme="dark"
          mode="inline"
        >
          {MenuNode}
        </Menu>
      </div>
    </Sider>
  )
}
const mapStateToProps = state => {
  return {
    showMenu: state.showMenu
  }
};
export default connect(mapStateToProps)(NavLeft)