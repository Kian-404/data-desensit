import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { type } from '../../redux/action'
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const { Header } = Layout;
const LHeader = (props) => {
  console.log(props);
  const { showMenu, ToogleMenu } = props;
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