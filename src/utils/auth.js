import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

// 获取当前登录时刻
export const setTokenTime = () => {
    localStorage.setItem(TOKEN_TIME, Date.now())
}

// 提供获取的方法
export const getTokenTime = () => {
    return localStorage.getItem(TOKEN_TIME)
}

// 是否已经过期--过期时间2小时
export const isTokenTime = () => {
    const currentTime = Date.now()
    const tokenTime = getTokenTime()
    // 当前时间减去登录时间 是否大于常量里设置的过期时间
    return currentTime - tokenTime > TOKEN_TIME_VALUE
}