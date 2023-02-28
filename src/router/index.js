import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name:'/',
        component: () => import('../layout/index.vue'),
        redirect: '/users',
        children: [
            {
                path: 'users',
                name: 'users',
                component: () => import('@/view/users/index.vue')
            },
            {
                path: 'categories',
                name: 'categories',
                component: () => import('@/view/categories/index.vue')
            },
            {
                path: 'goods',
                name: 'goods',
                component: () => import('@/view/goods/index.vue')
            },
            {
                path: 'orders',
                name: 'orders',
                component: () => import('@/view/orders/index.vue')
            },
            {
                path: 'params',
                name: 'params',
                component: () => import('@/view/params/index.vue')
            },
            {
                path: 'reports',
                name: 'reports',
                component: () => import('@/view/reports/index.vue')
            },
            {
                path: 'rights',
                name: 'rights',
                component: () => import('@/view/rights/index.vue')
            },
            {
                path: 'roles',
                name: 'roles',
                component: () => import('@/view/roles/index.vue')
            }
        ]
    },
    {
        path:'/login',
        name:'Login',
        component: () => import('../view/Login/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router