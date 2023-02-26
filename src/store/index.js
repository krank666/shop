import { createStore } from 'vuex'
import app from './modules/app'
import getters from "@/store/getters";
export default createStore({
    getters,
    modules: {
        app
    }
})