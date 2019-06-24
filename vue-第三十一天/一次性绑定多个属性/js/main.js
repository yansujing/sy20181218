

const AppTitle = {
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

};

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        title: '订单',
        className: 'title',
        obj: {
            title: '订单',
            className: 'title',
        }
    },
    components: {
        AppTitle
    }
});


