import React, { Component } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const generateId = (() => {
  let i = 0;
  return (prefix = '') => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

class LoginTab extends Component {
  constructor(props) {
    super(props);
    this.uniqueId = generateId('login-tab-');
  }
  render() {
    const { children } = this.props;
    return <TabPane {...this.props}>{children}</TabPane>;
  }
}

const wrapContext = props => (
    <LoginTab {...props} />
);

// 标志位 用来判断是不是自定义组件
wrapContext.typeName = 'LoginTab';

export default wrapContext;
