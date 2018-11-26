import router from './routers';
export default {
    plugins : [
        [
            'umi-plugin-react', {
                antd: true,
                dva: true,
                title:"看看就走",
                
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
        }
    }
};