

// 表单输入绑定
// v-model:用来与表单元素之间 创建 双向绑定，指令值 必须是 某个 data属性

const vm = new Vue({
    el: '#app',
    data: {
        input: '请输入用户名',
        textarea: '一些文本内容',
        checkbox1: ['1', '4'],
        checkbox2: true,
        radio: '2',
        select: '4',
        select1: ['1','4']
    }
})

setTimeout(() => {
    vm.input1 = '请输入用密码'
}, 2000)

