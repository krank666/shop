import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name:'Login',
        component: () => import('../view/Login/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router