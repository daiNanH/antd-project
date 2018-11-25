export default {
    plugins : [
        [
            'umi-plugin-react', {
                antd: true,
                dva: true,
                locale: {
                    enable: true
                }
            }
        ]
    ],
    routes : [
        {
            path: '/',
            component: '../layout',
            routes: [
                {
                    path: '/',
                    component: './HelloWorld'
                }, {
                    path: '/helloWorld',
                    component: './HelloWorld'
                }, {
                    path: 'puzzlecards',
                    component: './puzzlecards'
                }, {
                    path: 'list',
                    component: '../page/List/index'
                }, {
                    path: '/dashboard',
                    routes: [

                        {
                            path: '/dashboard/analysis',
                            routes: [{path : '/dashboard/analysis/pp', component : 'Dashboard/Pp'}]
                        }, {
                            path: '/dashboard/monitor',
                            component: 'Dashboard/Monitor'
                        }, {
                            path: '/dashboard/workplace',
                            component: 'Dashboard/Workplace'
                        }
                    ]
                }
            ]

        }
    ],
    proxy : {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true
        }
    }
};