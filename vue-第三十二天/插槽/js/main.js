

// 插槽
// 作用：用于向组件模板中 分发内容（DOM）

// 通过 Vue框架 自带的 slot组件 来接收 从 父组件 分发过来的 内容（可以是任何的DOM），slot组件的位置 决定了 分发内容的位置
// 组件 接收到 分发的内容之后，这个内容会 替换掉 slot组件
// 如果组件 模板中 没有 slot组件，那么组件自定义元素中的内容会被直接丢弃


// 默认插槽：没有 name属性的 slot 称为 默认插槽(name值为default)

// 具名插槽：有 name属性的 slot 称为 具名插槽

// 编译作用域：组件模板中的 所有内容 都在 当前组件作用域中编译

// 通过 作用域插槽 使自定义 元素中的内容 可以访问 当前组件实例上的属性

// slot的默认内容 <slot>默认内容</slot>，当 slot 没有接收到内容是，就会显示 默认内容

const AppTitle = {
    data() {
        return {
            obj: {
                title: '淘宝一下',
                url: 'https://www.taobao.com'
            }
        }
    },
    template: `<div>
                 <slot name='ul' :link='obj'></slot>
                 <slot name='p'></slot>

                 <slot name='default'><a>百度一下</a></slot>
                 <h1>我是标题</h1>
                 <p>我是组件模板中的内容</p>
               </div>`
};
Vue.component('AppTitle', AppTitle);


const AppBtn = {
    template: `<button>
                <slot>提交</slot>
              </button>`
};
Vue.component('AppBtn', AppBtn);

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        url: 'https://www.baidu.com'
    }
});


