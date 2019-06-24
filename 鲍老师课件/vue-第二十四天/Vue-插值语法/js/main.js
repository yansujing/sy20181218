

console.dir(Vue);

// Vue:是一个构造函数，用来创建 Vue实例

// 开发Vue项目的 步骤
// 1.创建 Vue 实例
// 2.通过 向构造函数 Vue 传入一个 对象(配置选项) 初始化 Vue实例

const vm = new Vue({
    el: '#app',
    data: {
        title: '我是标题',
        obj: {
            flag: false,
            name: 'steel',
            age: 28
        }
    }
});

// el:值是一个选择器字符串，将 Vue实例与 DOM元素（模板）进行绑定，这个 DOM元素内部 都会受到 当前Vue实例的控制，这个 DOM元素外部 都 不受当前Vue实例的控制
// data:定义 DOM元素中（模板）需要的数据，在data中 定义的数据都是 响应式 的(只要数据发生变化，那么所有引用数据的地方都会自动更新)，data中定义的属性都会成为 Vue实例的 属性

console.dir(vm.title);

setTimeout(() => {
    vm.title = '11111';
}, 2000);

// {{}}:插值语法，用来将 Vue实例中的 响应式数据 绑定到 某个 DOM元素中
// {{}}中放 js 表达式
// {{}}会将数据 解析为 普通文本


const vm1 = new Vue({
    el: '#app1',
    data: {
        title: '我是标题111',
        obj: {
            name: 'steel',
            age: 28
        }
    }
});
