import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import '@/router/permission'
import i18n from '@/i18n'
createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(i18n)
    .mount('#app')
