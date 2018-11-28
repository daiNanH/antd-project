import React, {Component} from 'react';
import {Layout, Menu,Icon,Avatar,Dropdown, message,Spin} from 'antd';
import Link from 'umi/link';
import router from 'umi/router';
import axios from 'axios';
import  './config'
// import { requsetLoading, responseLoading} from './Loading';
// Header, Footer, Sider, Content组件在Layout组件模块下
const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;
const onClick = function ({key}) {
  switch(key){
    case "1":
    message.info(`Click on item ${key}`);
    break;
    case "2":
    message.info(`Click on item ${key}`);
    break;
    case "3":
      axios.post('/user/logout.do')
      .then(function (response) {
        if(response.data.status==0){
          router.push('/login');
            }else{
              message.error(response.data.msg);
            }
      })
      .catch(function (error) {
        message.error(error.msg);
      });
    break;
  }
  
};
const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">用户中心</Menu.Item>
    <Menu.Item key="2">个人设置</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">退出</Menu.Item>
  </Menu>
);
class BasicLayout extends Component {
  constructor(props){
    super(props)
    this.state={
      username:""
    }
  }
  componentWillMount(){
    // console.log(requsetLoading)
    // console.log(responseLoading)
    var _this=this
    axios.post('/user/get_information.do')
    .then(function (response) {
      if(response.data.status==0){
            _this.setState({
              username:response.data.data.username
            })
          }else{
            router.push('/login');
          }
    })
    .catch(function (error) {
      message.error(error.msg);
    });
  }
  render() {
    console.log(this.props)
    return (
      <Layout>
        <Sider
          width={256}
          style={{
          minHeight: '100vh',
          color: 'white'
        }}><div
          style={{
        height: '32px',
        background: 'rgba(255,255,255,.2)',
        margin: '16px'
      }}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/index">
                <Icon type="home"/>
                <span>首页</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={< span > <Icon type="shopping"/> < span > 商品 < /span></span >}>
              <Menu.Item key="3">
                <Link to="/goods/control">商品管理</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/goods/style">品类管理</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={< span > <Icon type="pay-circle"/> < span > 订单 < /span></span >}>
              <Menu.Item key="6">
                <Link to="/order/control">订单管理</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
            backgroundColor: "#fff",
            textAlign: "right",
            paddingRight: 24
          }}>
            <Dropdown  overlay={menu}>
              <span style={{display:'inline-block',height:'100%',cursor:'pointer'}}> 
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
             {this.state.username}</span>
            </Dropdown>

          </Header>
          
          <Content style={{
            margin: "24px 16px 0"
          }}>
          
            <div
              style={{
              padding: 24,
              backgroundColor: '#fff',
              minHeight: 360,
              textAlign:"center"
            }}><Spin spinning={this.props.children?false:true}  />{this.props.children}</div>
            
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;