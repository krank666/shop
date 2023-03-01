import { login as loginApi } from '@/api/login'
import router from '@/router'
export default {
    namespaced: true,
    // step0 声明token
    state: () => {
        token: localStorage.getItem('token') || ''
    },
    // step1 存储token的方法
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
            console.log(state)
        }
    },
    // step1 异步操作，调取接口，存储token
    actions: {
        login({commit}, userInfo) {
            return new Promise( (resolve, reject) => {
                loginApi(userInfo).then(res => {
                    commit('setToken', res.token)
                    // 成功后跳转
                    router.replace('/')
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}