import { login as loginApi } from '@/api/login'
import router from '@/router'
import {setTokenTime} from '@/utils/auth'
export default {
    namespaced: true,
    // step0 声明token
    state: () => ({
        token: localStorage.getItem('token') || '',
        isCollapse: ''
    }),
    // step1 存储token的方法
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        },
        setBool(state) {
            state.isCollapse = state
        }
    },
    // step1 异步操作，调取接口，存储token
    actions: {
        login({commit}, userInfo) {
            return new Promise( (resolve, reject) => {
                loginApi(userInfo).then(res => {
                    commit('setToken', res.token)
                    // 记录当前登录时间
                    setTokenTime()
                    // 成功后跳转
                    router.replace('/')
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        logout({ commit }) {
            // 清空token
            commit('setToken', '')
            localStorage.clear()
            router.replace('/login')
        },
        setCollapse({commit}, params) {
            console.log(params);
            commit('setBool', params)
        }
    }
}