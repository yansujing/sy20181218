

// Vue插件

// Vue插件 通常是给 Vue框架 添加全局性的功能的
// 添加全局方法或者属性
// 添加全局资源（组件、指令、过滤器等）
// 添加Vue实例方法或者属性


// 创建插件(大驼峰)
const MyPlugin = {
    install(Vue) {
        console.log(Vue);

        Vue.a = 123;
        Vue.fn = function () {
            console.log(Vue.a);
        }

        Vue.component('AppCom', {
            template: `<div>AppCom</div>`
        });

        Vue.directive();

        Vue.filter();

        Vue.prototype.run = function () {
            console.log('run');
        }
    }
};


// 使用 Vue插件
// 通过 Vue.use(插件对象)安装插件，会查找 插件对象上的 install方法并调用，传了 Vue对象给install方法的第一个参数

Vue.use(MyPlugin);

console.log(Vue.fn());

// Vue.run();


Vue.component('AppCom1', {
    template: `<div>AppCom1<AppCom></AppCom></div>`,
    created() {
        this.run();
    }
});

const vm = new Vue({
    el: '#app'
});

vm.run();




