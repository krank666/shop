import { createI18n } from "vue-i18n";
import EN from './en'
import ZH from './zh'
const messages = {
    en: {
        msg: {
            title: 'user login',
            email: 'Email'
        }
    },
    zh: {
        msg: {
            title: '用户登录',
            email: '邮箱'
        }
    }
}

const getCurrentLanguage = () => {
    const UAlang = navigator.language
    const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
    localStorage.setItem('lang', langCode)
    return langCode
}

// create i18n　
const i18n = createI18n({
    leacy: false,
    globalInjection: true,
    locale:getCurrentLanguage() || 'zh',
    messages: messages
})

export default i18n
