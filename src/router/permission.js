import router from './index'
import store from '@/store'


const whiteList = ['/login','/']
router.beforeEach((to, from, next) => {
    console.log(store.getters.token)
    // 判断是否登录是否有token
    if(store.getters.token) {
        //如果已经登录 并且是从登录页进来的
        if(to.path === '/login') {
            // 跳转到首页
            next('/')
        } else {
            next()
        }
    }
    else {
        // 如果没有登录的情况下
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})