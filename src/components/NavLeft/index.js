import React, { useState, useEffect } from 'react'
import { Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/MenuConfig'
import { connect } from 'react-redux'
import './index.less'
import { SettingOutlined, MenuUnfoldOutlined, HddOutlined } from '@ant-design/icons'
import Logo from '../../logo.svg';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

const NavLeft = (props) => {
  const [currentKey, setCurrentKey] = useState('');
  // const [MenuNode, setMenuNode] = useState(renderMenu(MenuConfig));

  const renderMenu = (data) => {
    let MenuList = data.map(item => (
      <SubMenu
        key={item.key}
        title={item.title}>
        {item.children &&
          item.children.map(menuItem => (
            <Menu.Item
              key={menuItem.key}
            >
              <NavLink to={menuItem.key}>{menuItem.title}</NavLink>
            </Menu.Item>
          ))}
      </SubMenu>
    ));
    return MenuList;
  }
  let MenuNode =  renderMenu(MenuConfig);
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
          inlineCollapsed={showMenu}
        >
          {MenuNode}
        </Menu>
      </div>
    </Sider>
  )
}
// class NavLeft extends React.Component {
//   state = {
//     currentKey: ''
//   }
//   // 菜单点击
//   handleClick = ({ item, key }) => {
//     if (key === this.state.currentKey) {
//       return false;
//     }
//     // 事件派发，自动调用reducer，通过reducer保存到store对象中
//     // const { dispatch } = this.props;
//     // dispatch(switchMenu(item.props.title));

//     this.setState({
//       currentKey: key
//     });
//     // hashHistory.push(key);
//   };
//   componentWillMount() {
//     const menuTreeNode = this.renderMenu(MenuConfig);

//     this.setState({
//       menuTreeNode
//     })
//   }
//   // 菜单渲染
//   renderMenu = (data) => {

//     return data.map((item) => {
//       if (item.children) {
//         return (
//           <SubMenu title={item.title} key={item.key} icon={<SettingOutlined />}>
//             {this.renderMenu(item.children)}
//           </SubMenu>
//         )
//       }
//       return <Menu.Item title={item.title} key={item.key}>
//         <NavLink to={item.key}>{item.title}</NavLink>
//       </Menu.Item>
//     })
//   }
//   homeHandleClick = () => {
//     // const { dispatch } = this.props;
//     // dispatch(switchMenu('首页'));
//     this.setState({
//       currentKey: ""
//     });
//   };
//   render() {
//     let { showMenu } = this.props;
//     console.log(showMenu);
//     debugger;
//     return (
//       <Sider trigger={null} collapsible collapsed={showMenu}>
//         <div className="nav-left">
//           <div className="sider-menu-logo">
//             <NavLink to="/home" onClick={this.homeHandleClick}>
//               <div className="logo">
//                 <h1 className="logo-text">Data Desensit</h1>
//               </div>
//             </NavLink>
//           </div>
//           <Menu
//             onClick={this.handleClick}
//             theme="dark"
//             mode="inline"
//             inlineCollapsed={showMenu}
//           >
//             {this.state.menuTreeNode}
//           </Menu>
//         </div>
//       </Sider>
//     );
//   }
// }
const mapStateToProps = state => {
  return {
    showMenu: state.showMenu
  }
};
export default connect(mapStateToProps)(NavLeft)