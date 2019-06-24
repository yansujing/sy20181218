


// 组件模板根元素的属性(除props属性)继承

// 组件模板 根元素 会 继承 组件自定义元素的所有属性（除了props属性）
// 不继承属性：设置 inheritAttrs:false(默认值是true),(处了props属性、class、style)，不会影响 $attrs属性

// 组件实例上的 $attrs属性：包含了 所有 组件自定义元素上绑定的属性（除了props属性、class、style）
// 组件实例上的 $listeners属性：包含了 所有 组件自定义元素上绑定的事件监听器

// $attrs和$listeners在创建高级别的组件时非常有用

const AppTitle = {
    inheritAttrs: false,
    props: {
        getTitle: {
            type: String,
            default: '标题'
        }
    },
    methods: {
        modify() {
            this.$emit('update:getTitle', '产品');
        }
    },
    template: `<div>
                 <h1>{{getTitle}}</h1>
                 <button @click='modify'>修改</button>
               </div>`,
    created() {
        console.log(this);
    }
};

const AppInput = {
    methods: {
        fn() {
            this.$listeners.input();
        }
    },
    template: `<div>
                 <input v-bind='$attrs' @input='fn' />
               </div>`,
    created() {
        console.log(this.$listeners);
    }
};

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        title: '订单'
    },
    methods: {
        fn1() {
            console.log('input');
        }
    },
    components: {
        AppTitle,
        AppInput
    }
});


