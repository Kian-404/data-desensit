import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { type } from '../../redux/action'
import { Layout, Menu, Dropdown } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined, UserOutlined, InfoCircleOutlined, LogoutOutlined } from '@ant-design/icons'
const { Header } = Layout;



const LHeader = (props) => {
  console.log(props);
  const { showMenu, ToogleMenu } = props;
  const menu = (
    <Menu onClick={(item) =>handleClickUser(item)}>
      <Menu.Item key="0">
        <InfoCircleOutlined />详情
      </Menu.Item>
      <Menu.Item key="1">
        <LogoutOutlined />退出
      </Menu.Item>
    </Menu>
  );
  const handleClickUser = ({key}) => {
    console.log(key);
    if(key === '1'){
      window.location.href = '#/login';
    }
  }
  const Toggle = () => {
    console.log('123');
    ToogleMenu(!showMenu)
  }
  let Icon = showMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;
  return (
    <Header className="header">
      <div className="toogle-icon" onClick={Toggle}>
        {Icon}
      </div>
      <div className="user-option">
        <Dropdown overlay={menu}>
          <div>
            <UserOutlined /> <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              admin <DownOutlined />
            </a>
          </div>

        </Dropdown>,
      </div>
      Header</Header>
  )
}
const mapStateToProps = state => {
  return {
    showMenu: state.showMenu
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ToogleMenu: (showMenu) => {
      dispatch({
        type: type.TOOGLE_MENU,
        showMenu: showMenu
      });
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LHeader)