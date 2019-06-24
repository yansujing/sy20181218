

// 可复用的 过渡组件
// 通过 Vue的 组件系统实现，只要将 transition或者transition-group组件 作为 根组件


const FadeTransition = {
    template: `<transition name='fade'>
                 <slot></slot>
               </transition>`
};


// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        flag: true
    },
    components: {
        FadeTransition
    }
});







