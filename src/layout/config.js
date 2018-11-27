import axios from 'axios'
// 拦截请求
 axios.interceptors.request.use(function(config){
	return config
})

// 拦截相应

axios.interceptors.response.use(function(config){

	return config
})