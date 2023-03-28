import { createI18n } from "vue-i18n";

const messages = {
    en: {
        msg: {
            title: 'user login'
        }
    },
    zh: {
        msg: {
            title: '用户登录'
        }
    }
}

const getCurrentLanguage = () => {
    const UAlang = navigator.language
    const langCode = UAlang.index('zh') !== -1 ? 'zh' : 'en'
    localStorage.setItem('lang', langCode)
    return langCode
}
