

// Vue实例的常用属性与方法

// Vue实例的常用属性
// 1. $refs:获取 当前组件下所有 有 引用信息（有 ref属性的组件或者DOM元素） 的 子组件实例或者原生DOM元素

// 2.$parent:获取 当前组件的 父组件实例
// 3.$children:获取 当前组件下的 所有 子组件实例

// Vue实例的常用方法
// 1.$mount(选择器字符串/原生DOM元素):挂载元素
// 2.$destroy():销毁当前实例

// 3.$nextTick(回调函数):回调函数会在 下一轮 DOM更新时 被调用
// 在 修改完数据之后立即 调用$nextTick方法，Vue会 等待 DOM更新完成之后 调用 $nextTick方法中的 回调函数

// 因为 在Vue中，数据更新 导致的 DOM更新 是 异步更新的，不是 同步的


const AppCom1 = {
    data() {
        return {
            title: '我是标题'
        }
    },
    methods: {
        fn() {
            this.title = '我是标题1111';

            console.log(this.$refs.div.innerText);
            
            this.$nextTick(() => {
                console.log(this.$refs.div.innerText);
            });
        }
    },
    template: `<div ref='div'>{{title}}<button @click='fn'>改变</button></div>`,
    created() {
        console.log(this.$parent);
    }
}

const AppCom2 = {
    methods: {
        fn() {
            this.$destroy();
        }
    },
    template: `<div>AppCom2<button @click='fn'>销毁</button></div>`,
    created() {
        console.log(this.$parent);
        console.log(this.$children);
    },
    beforeDestroy() {
        alert('beforeDestroy');
    },
    destroyed() {
        alert('destroyed');
    }
}

// 根组件
const vm = new Vue({
    components: {
        AppCom1,
        AppCom2
    },
    mounted() {
        console.log(this.$refs.p1);
        console.log(this.$refs.appCom1.title);

        console.log(this.$children);
    }
}).$mount('#app');

console.log(vm);
