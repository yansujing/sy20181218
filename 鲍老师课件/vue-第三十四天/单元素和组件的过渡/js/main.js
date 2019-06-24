

// 单元素 和 单组件的过渡

// Vue 提供了 transition组件 来给 任何单元素和单组件添加 进入和离开的 过渡效果
// transition组件会 给 进入或者离开的 元素 自动应用 过渡效果

// 以下情形可以 使用 transition组件实现过渡效果
// 1.v-if条件渲染
// 2.v-show
// 3.动态组件
// 4.组件根节点

// transition组件接收 一个 名叫 name 的 props属性
// name：定义 transition组件 需要应用的 class名称的 前缀

// 有 6 个 class 会被 transition组件在 恰当的时期 自动应用给当前过过渡的元素/组件
// v:transition组件的 name属性
// 1.v-enter：定义 进入 过渡的 开始状态
// 2.v-enter-active:定义 进入 过渡生效时 的状态
// 3.v-enter-to:定义 进入 过渡的 结束状态
// 4.v-leave：定义 离开 过渡的 开始状态
// 5.v-leave-active:定义 离开 过渡生效时 的状态
// 6.v-leave-to:定义 离开 过渡的 结束状态

// 自定义过渡类名：可以使 transition组件结合 第三方动画库实现过渡效果
// 通过 transition组件的 6个 props属性
// 1.enter-class
// 2.enter-active-class
// 3.enter-to-class
// 4.leave-class
// 5.leave-active-class
// 6.leave-to-class


// 初始渲染的过渡
// 设置 appear props属性
// appear-class
// appear-active-class
// appear-to-class


// 设置 过渡模式，通过 mode props属性
// 1.in-out:新元素先进行过渡，完成之后当前元素过渡离开
// 2.out-in:当前元素先进行过渡，完成之后新元素过渡进入


Vue.component('AppCom', {
    template: `<div>AppCom</div>`
});

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        flag1: true,
        flag2: true,
        flag3: true
    }
});







