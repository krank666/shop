import { createI18n } from "vue-i18n";
import EN from './en'
import ZH from './zh'
const messages = {
    en: {
       ...EN
    },
    zh: {
       ...ZH
    }
}

const getCurrentLanguage = () => {
    const UAlang = navigator.language
    const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
    localStorage.setItem('lang', langCode)
    return 'en'
}

// create i18n　
const i18n = createI18n({
    leacy: false,
    globalInjection: true,
    locale:getCurrentLanguage() || 'zh',
    messages: messages
})

export default i18n
