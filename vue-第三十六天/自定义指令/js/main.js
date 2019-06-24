

// 自定义指令（directive）:Vue允许 开发者 创建自己的 Vue 指令
// 常见内置指令：v-if,v-show,v-model,v-for,v-bind,v-on

// 作用：用于 对 当前元素的操作

// 创建指令
// 1.全局指令
// 2.局部指令

// 全局指令：通过 Vue.directive(指令名称（小驼峰）,指令配置选项)

// 当某个元素使用指令时，Vue在进行模板编译时，会将指令绑定到当前元素，然后运行指令的 一系列初始化过程，在这个过程中，Vue提供了一些指令 钩子函数

// bind:只调用一次，指令第一次绑定到元素时被调用，这个钩子函数中一般进行指令的初始化设置
// inserted:被绑定元素插入到它的 父节点 时被调用，（仅保证父节点存在，但不一定被插入到文档中）
// update:所在组件的 VNode 更新时调用
// unbind:只调用一次，指令与元素解绑时调用

// 指令钩子函数的参数
// 1.el:指令所绑定的元素
// 2.binding:一个对象（name:指令名称，value:指令绑定的值，arg:指令参数，modifiers:指令修饰符）

// Vue.directive('changeColor', {
//     bind(el, binding) {
//         console.log('bind');
//         console.log(el);
//         console.log(binding);
//     },
//     inserted(el, binding) {
//         console.log('inserted');

//         el.style.color = binding.value;
//     },
//     unbind() {
//         console.log('unbind');
//     }
// });


// 指令的使用：v-指令名称


// 局部指令：通过 组件的 directives选项
const changeColor = {
    bind(el, binding) {
        console.log('bind');
        console.log(el);
        console.log(binding);
    },
    inserted(el, binding) {
        console.log('inserted');

        el.style.color = binding.value;
    },
    update(el, binding) {
        el.style.color = binding.value;
    },
    unbind() {
        console.log('unbind');
    }
};

// Vue.directive('changeColor', changeColor);

// 函数简写（当bind和update触发相同行为时）
// const changeColor = function(el,binding){
//     el.style.color = binding.value;
// }
// Vue.directive('changeColor', changeColor);


// changeColor指令是根组件的局部指令，只能在根组件的模板中使用
Vue.component('AppCom1', {
    template: `<div><h1 v-changeColor>AppCom1</h1></div>`
});

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        color1: 'red',
        color2: 'blue'
    },
    directives: {
        changeColor
    }
});

setTimeout(() => {
    // vm.$destroy();
}, 2000);







