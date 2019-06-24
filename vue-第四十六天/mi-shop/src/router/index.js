
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

import storage from '../service/storage'

// 安装路由插件
Vue.use(Router)

const router = new Router({
    routes
})

// 页面刷新，重新给仓库中的token赋值
if (storage.getInfo('token')) {
    store.commit('setToken', storage.getInfo('token'))
}

router.beforeEach((to, from, next) => {
    // 路由跳转前，取消正在发送的请求
    console.log(window.cancel);
    window.cancel.forEach((item, index) => {
        item();
        window.cancel.splice(index, 1);
    });

    if (to.meta.requireLogin && !store.state.token) {
        next({ name: 'login', query: { redirect: to.name } });
    } else {
        next();
    }
});

export default router