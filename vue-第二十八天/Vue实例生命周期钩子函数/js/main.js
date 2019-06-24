

// Vue实例生命周期钩子函数

// 在 Vue实例的 创建过程中，它需要 设置数据监听、编译模板、绑定事件、实例挂载

// 作用：使开发人员可以在 Vue实例 的初始化过程的 不同阶段 添加自己的代码

// 钩子函数(在 Vue实例 创建的 各个阶段 将自动调用 相应 钩子函数)
// beforeCreate：在 Vue实例 初始化之后，在 数据监听、方法、计算属性...之前 被调用
// created：在 Vue实例 创建完成，并 设置了 数据监听、方法、计算属性...之后 被调用
// beforeMount：在 Vue实例挂载 之前 被调用
// mounted：在 Vue实例挂载 之后 被调用
// beforeUpdate：在 数据更新之前 被调用
// updated：在 数据更新之后并dom重新渲染完成后 被调用

// 钩子函数中的 this 指向当前 Vue实例

const vm = new Vue({
    el: '#app',
    data: {
        title: '我是标题'
    },
    methods: {
        fn() {
            console.log(this.title);
        }
    },
    // 钩子函数
    beforeCreate() {
        console.log(this.title);
        console.log('beforeCreate');
    },
    created() {
        console.log(this.title);
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    }
});

setTimeout(() => {
    vm.title = 'hello world';
}, 1000)

