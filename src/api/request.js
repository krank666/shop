import axios from 'axios'
import { ElMessage } from 'element-plus'
import { isTokenTime } from '@/utils/auth'
import store from '@/store'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // 如果登录情况下
        if (localStorage.getItem('token')) {
            // token过期了 强制登出 并提示
            if(isTokenTime()) {
                store.dispatch('app/logout')
                return Promise.reject(new Error('token失效，请重新登录'))
            }
        }
        config.headers.Authorization = localStorage.getItem('token')
        return config
    },
    (error) => {
        return Promise(new Error(error))
    }
)

// 响应拦截器
service.interceptors.response.use( (response) => {
    const { data, meta } = response.data
    return data

   /* if (meta.status === 200 || meta.status === 201) {
        return data
    } else {
        ElMessage.error(meta.msg)
        return Promise.reject(new Error(meta.msg))
    }*/
}, error => {
    error.response && ElMessage.error(error.response.data)
    // return Promise.reject(new Error(error.response.data))
})
export default service