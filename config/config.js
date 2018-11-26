import router from './routers';
export default {
    plugins : [
        [
            'umi-plugin-react', {
                antd: true,
                dva: true,
                locale: {
                    enable: true
                },
                title:"看看就走",
                
            }
        ]
    ],
    theme:{
        "@font-color":"red"
    },
    routes :router,
    proxy : {
        '/dev': {
            target: 'https://gitee.com/imooccode/',
            changeOrigin: true
        }
    }
};