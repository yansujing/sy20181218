

// 数据获取

// 导航完成后获取数据：在组件实例 生命周期钩子函数（created）中 获取数据
// 导航完成前获取数据：通过 组件守卫 beforeRouterEnter


import { router } from '../router/index.js';

import ajaxPromise from '../service/ajax.js';

// 在 Vue的 原型对象上定义 ajax请求方法，使所有 组件实例都能继承这个方法
Vue.prototype.ajaxPromise = ajaxPromise;

const vm = new Vue({
    el: '#app',
    router
});