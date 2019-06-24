
const AppInput = {
    // 定义 model选项 
    model: {
        prop: 'backLog',
        event: 'input'
    },
    // 父组件的 data属性（addBacklog）的值会 传给 名为 backLog的 prop属性
    props: {
        backLog: ''
    },
    methods: {
        input(e) {
            console.log(e);
            this.$emit("input", e.target.value);
        }
    },
    template: `<div class='desc'>
                 <input :value='backLog' @input='input' type='text' placeholder='请输入待办事项内容...' />  
               </div>`
};



// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        addBacklog: ''
    },
    components: {
        AppInput
    }
});


