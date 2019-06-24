

// 组件接收数据：通过 组件的 props配置选项来 接收 父组件 的数据

// 如果组件 需要从父组件 接收数据，那么 就要在 组件中 定义 props属性

// 父组件 通过 子组件的 props属性名称将数据传给子组件（通过在组件的 自定义元素上 设置 属性（props属性名称））

// props和data比较相似，区别是 props不能直接被修改（因为props属性接收数据是 单向的）

// 1.props的值可以是一个数组，数组中需要设置 接收的 数据属性名称（类型是字符串，命名规范 推荐使用 小驼峰）：['wordText','backgroundColor']
// 2.props的值也可以是一个对象：{wordText:数据类型[String],backgroundColor:数据类型[Object]},{wordText:[String,Number]}


// 按钮组件
const ButtonCom = {
    // props: [
    //     'wordText',
    //     'backgroundColor'
    // ],
    props: {
        // wordText: [String, Number],
        // wordText: String,
        wordText: {
            type: String,
            //  设置是否必传，默认是false
            // required: true,

            // 默认值
            // default: '编辑'
            // 如果默认值是对象或数组，必须使用一个工厂函数返回相应的值
            // default() {
            //     return {};
            // }

            // 验证props属性值的合法性，根据函数的 返回值（true/false）来决定 props属性值是否通过验证
            validator(value) {
                console.log(this);
                return ['添加', '编辑', '删除'].indexOf(value) !== -1;
            }

            // default和validator在组件实例创建之前就被处理了
        },
        backgroundColor: String
    },
    template: `<p class='desc'>
                   <button :style='{backgroundColor}'>{{wordText}}</button> 
                 </p>`,
    created() {
        console.log(this.wordText);
    }
};
Vue.component('ButtonCom', ButtonCom);


// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        word: '123'
    }
});


