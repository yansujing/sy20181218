

// 指令：用于对DOM的操作
// 带有 'v-'前缀 称为指令，指令的值 是 单个js表达式

// 条件判断
// v-if：根据指令的值 插入和删除当前 DOM元素，指令的值 可以是 true或者false
// v-else：必须跟在 v-if指令后面
// v-else-if: 必须跟在 v-if或者 v-else-if指令后面

// v-show：根据指令的值 显示和隐藏当前 DOM元素，指令的值 可以是 true或者false

// 当 DOM元素被频繁切换并且DOM比较复杂的时候，使用 v-show

// v-once:执行 一次性的插值，当插值处的数据发生变化，插值处的数据 不再更新

// v-html:在当前DOM元素中插入html字符串
// v-text：在当前DOM元素中插入普通文本

// v-bind:给当前DOM元素绑定某个属性，通过 v-bind:属性名，指令:后面的值 称为 指令参数
// v-bind简写为 :

// v-on:给当前DOM元素绑定某个事件，指令参数：事件名称
// v-on简写为 @

const vm = new Vue({
    el: '#app',
    data: {
        flag1: true,
        flag2: true,
        title: '我是一级标题',
        url: '<a href="https://www.baidu.com">百度一下</a>',

        href: 'https://www.baidu.com'
    },
    // 通过 methods选项来定义 方法，方法也会成为 Vue实例的属性
    methods: {
        fn1() {
            alert(1);
            // 方法中的 this 指向 当前Vue实例
            console.log(this.title);

            this.fn2();
        },
        fn2() {
            console.log(222);
        }
    }
});

console.log(vm);

vm.fn1();

setTimeout(() => {
    vm.flag1 = false;
    vm.flag2 = false;
    vm.title = '我是一级标题111';

    vm.url = '<a href="https://www.taobao.com">淘宝一下</a>'
}, 2000);