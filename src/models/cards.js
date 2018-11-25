import request from '../util/request';
const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};
export default {
  namespace : 'cards',
  state     : {
    cardsList: [ ]
  },
  effects: {
    * queryList(_, sagaEffects) {
      const listData = [{
        name : 'umi',
        desc : '极快的类 Next.js 的 React 应用框架',
        url  : 'https://umijs.org',
        id:1
      },
      {
        name : 'antd',
        desc : '一个服务于企业级产品的设计体系',
        url  : 'https://ant.design/index-cn',
        id:12
      },
      {
        name : 'antd-pro',
        desc : '一个服务于企业级产品的设计体系',
        url  : 'https://ant.design/index-cn',
        id:22
      }
      ];
      const { call, put } = sagaEffects;
      yield call(delay, 3000);
      yield put({ type: 'initList', payload: listData });
    }
  },
  reducers: {
    initList(state, {payload}) {
      const cardsList = [...payload];
      return {
        cardsList
      };
    }
  }
};