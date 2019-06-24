

// 动态组件：利用 is特性 来实现 组件的动态切换
// 通过 内置组件 component 来实现


const AppCom1 = {
    template: `<h1>AppCom1</h1>`
}
const AppCom2 = {
    template: `<h1>AppCom2</h1>`
}
const AppCom3 = {
    template: `<h1>AppCom3</h1>`
}

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        comName: 'AppCom2'
    },
    methods: {
        fn() {
            this.comName = 'AppCom3';
        }
    },
    components: {
        AppCom1,
        AppCom2,
        AppCom3
    }
});


