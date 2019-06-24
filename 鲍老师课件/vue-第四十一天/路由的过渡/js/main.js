

// 路由的过渡


import { router } from '../router/index.js';

import ajaxPromise from '../service/ajax.js';

// 在 Vue的 原型对象上定义 ajax请求方法，使所有 组件实例都能继承这个方法
Vue.prototype.ajaxPromise = ajaxPromise;

const vm = new Vue({
    el: '#app',
    router
});