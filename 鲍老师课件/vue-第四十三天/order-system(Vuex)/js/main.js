
import App from '../app/index.js';

import { router } from '../router/index.js';

import { store } from '../store/index.js';

import ajaxPromise from '../service/ajax/index.js';

// 注册全局组件
import '../components/index.js';

// 注册全局指令
import '../directives/index.js';

// 在 Vue的 原型对象上定义 $ajax 请求方法，使所有 组件实例都能继承这个方法
Vue.prototype.$ajax = ajaxPromise;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');