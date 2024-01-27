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
                component: './home/Home'
              }
        ]
      },
      
]
export default router;