

// 列表渲染

// v-for:把一组数据渲染到页面中，重复渲染当前DOM元素

// 语法 v-for='变量 of 数据'，变量：遍历的每个数组元素，数据：被遍历的数组数据

const vm = new Vue({
    el: '#app',
    data: {
        arr: [
            '列表1',
            '列表2',
            '列表3',
            '列表4',
            '列表5',
        ],
        obj: {
            name: 'Steel',
            age: 28,
            run() {
                console.log('run')
            }
        },
        arr1: [
            {
                title: '代办事项1',
                flag: true
            },
            {
                title: '代办事项2',
                flag: false
            },
            {
                title: '代办事项3',
                flag: true
            }
        ]
    },
    computed: {
        filterArr() {
            return this.arr1.filter(item => !item.flag);
        }
    },
    methods: {
        add() {
            // 调用数组的变异方法Vue都是可以监听到的
            this.arr1.push({
                title: '代办事项2',
                flag: false
            });
        },
        del() {
            this.arr1.pop();
        }
    }
})

