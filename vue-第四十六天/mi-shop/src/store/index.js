
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

// 安装Vuex插件
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        shopcarList: []
    },
    mutations
})

export default store