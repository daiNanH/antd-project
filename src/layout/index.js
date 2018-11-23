import React, { Component } from 'react';
import { Layout } from 'antd';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
render() {
  return (
    <Layout>
      <Sider width={56} style={{minHeight:'100vh',color:'white'}} >Sider</Sider>
      <Layout>
        <Header style={{backgroundColor:"#fff",textAlign:"center",padding:0}}>Header</Header>
        <Content style={{margin:"24px 16px 0"}}><div style={{padding:24,backgroundColor:'#fff',minHeight:360}}></div>{ this.props.children }</Content>
      </Layout>
    </Layout>
  )
}
}

export default BasicLayout;