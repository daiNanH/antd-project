import axios from 'axios'
// 拦截请求
 axios.interceptors.request.use(function(config){
    // Spin.setDefaultIndicator({tip:'拼命加载中。。。'})
	return config
})

// 拦截相应

axios.interceptors.response.use(function(config){

	return config
})