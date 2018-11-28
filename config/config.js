import router from './routers';
export default {
    plugins : [
        [
            'umi-plugin-react', {
                antd: true,
                dva: true,
                title:"看看就走",
                dynamicImport: {
                    loadingComponent: './components/PageLoading/index',
                },
            }
        ]
    ],
    theme:{
        "@font-color":"red"
    },
    
    routes :router,
    proxy : {
        '/manage': {
            target: 'http://admintest.happymmall.com',
            changeOrigin: true
        },
        '/user' : {
            target: 'http://admintest.happymmall.com',
            changeOrigin : true
        }
    }
};