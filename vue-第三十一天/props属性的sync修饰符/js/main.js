


// props属性的sync修饰

// 作用：对一个 props 属性 创建 ‘双向绑定’

// 使用 update:props属性名 这种模式来 触发一个事件 从而 改变父组件的数据

const AppTitle = {
    props: {
        getTitle: {
            type: String,
            default: '标题'
        }
    },
    methods: {
        modify() {
            // this.getTitle = '产品';
            this.$emit('update:getTitle', '产品');
        }
    },
    template: `<div>
                 <h1>{{getTitle}}</h1>
                 <button @click='modify'>修改</button>
               </div>`,

};

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        title: '订单'
    },
    components: {
        AppTitle
    }
});


