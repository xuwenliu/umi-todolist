// 配置式路由  https://umijs.org/zh/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1
const routes = [
    {
        path: '/',
        component: '../layouts/index',
        routes: [
            { path: '/', component: '../pages/index' },
            { path: '/todolist', component: '../pages/todolist' },
        ]
    }
];
module.exports = routes;
