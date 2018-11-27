const router=[
    {
        path: '/',
        component: 'Login'
    },
    {
        path: '/login',
        component: 'Login'
    },
    {
        path: '/index',
        component: '../layout',
        routes:[
            {
                path: '/index',
                component: '/home/home'
              }
        ]
      },
      
]
export default router;