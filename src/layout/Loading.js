import axios from 'axios'
import { Spin } from 'antd';

// 拦截请求 
const requsetLoading= axios.interceptors.request.use(function(config){
	return config
})

// 拦截相应

const responseLoading=axios.interceptors.response.use(function(config){
    // <Spin spinning={false} />
    // console.log(223)
	return config
})

export { requsetLoading, responseLoading}