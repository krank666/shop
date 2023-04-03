import { login as loginApi } from '@/api/login'
import router from '@/router'
import {setTokenTime} from '@/utils/auth'
import {ref} from "vue";
export default {
    namespaced: true,
    // step0 声明token
    state: () => ({
        token: localStorage.getItem('token') || '',
        isCollapse: '',
        userInfo: localStorage.getItem('userInfo') || {},
        osType: localStorage.getItem('osType') || ''
    }),
    // step1 存储token的方法
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        },
        setUserInfo(state, info) {
            localStorage.setItem('userInfo', JSON.stringify(info))
            state.userInfo = info
        },
        setBool(state) {
            state.isCollapse = state
        },
        setOStype(state, type) {
            localStorage.setItem('osType', type)
            state.osType = type
        }
    },
    // step1 异步操作，调取接口，存储token
    actions: {
        login({commit}, userInfo) {
            return new Promise( (resolve, reject) => {
                loginApi(userInfo).then(res => {
                    commit('setToken', res.token)
                    commit('setUserInfo', res)
                    // 记录当前登录时间
                    setTokenTime()
                    // 获取当前登录者的操作系统
                    const isMac = ref(/macintosh|mac os x/i.test(navigator.userAgent))
                    const isWin = ref(/windows/i.test(navigator.userAgent))
                    console.log(isMac);
                    console.log(isWin);
                    // isMac.value === true ? commit('setOStype', 'MAC') : commit('setOStype', 'WIN')
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
            commit('setBool', params)
        }
    }
}
