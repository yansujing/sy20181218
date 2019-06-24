

// class与style的绑定

// class绑定语法
// 1.对象形式：{类名:布尔值,类名:布尔值,类名:布尔值,类名:布尔值,类名:布尔值....}
// 2.数组形式：[表达式，表达式，表达式，表达式，表达式....]

// style绑定语法
// 1.对象形式：{样式名:样式值,样式名:样式值,样式名:样式值,样式名:样式值,....}
// 2.数组形式：[样式对象，样式对象....]


const vm = new Vue({
    el: '#app',
    data: {
        obj1: {
            p1: false,
            p2: true,
            p3: true
        },
        flag1: false,

        arr1: [
            "p1",
            "p2"
        ],

        obj2: {
            color: "blue",
            fontSize: "50px"
        },
        obj3: {
            backgroundColor: "red",
            padding: "50px",
            fontSize: "20px",
            border: "1px solid #000"
        }
    },
    computed: {
        getClass() {
            this.arr1.push('p3');
            return this.arr1;
        }
    },
    methods: {
        setClass() {
            return {
                p1: false,
                p2: true,
                p3: true
            }
        },

        fn1() {
            this.obj2.color = 'black';
        }
    }
})

