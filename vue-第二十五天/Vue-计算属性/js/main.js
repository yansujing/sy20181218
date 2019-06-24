

// 计算属性（computed）
// 依赖于某些 data 属性 返回新的结果

const vm = new Vue({
    el: '#app',
    data: {
        msg: 'hello World!',
        title: '我是标题'
    },
    methods: {
        reverseMsgFn() {
            console.log('reverseMsgFn');
            return `${this.msg.toUpperCase().split('').reverse().join('')}----${this.title}`;
        }
    },
    // 通过 computed 选项来 添加 计算属性
    computed: {
        // 计算属性返回的值 依赖于某些data属性，一旦依赖的 data属性发生变化，计算属性的函数就会被再次 调用
        // 只要依赖的data属性不发生变化，计算属性的 函数是不会被调用的
        // 计算属性的值 会依赖于 某些data属性 进行 缓存，多次访问同一个计算属性不会调用 它的函数，而是直接拿缓存的值

        // 这个匿名函数就是计算属性的 get函数
        reverseMsg: function () {
            // this指向当前 Vue实例
            console.log('reverseMsg');
            return `${this.msg.toUpperCase().split('').reverse().join('')}----${this.title}`;
        }

        // reverseMsg: {
        //     get() {
        //         // this指向当前 Vue实例
        //         console.log('reverseMsg');
        //         return `${this.msg.toUpperCase().split('').reverse().join('')}----${this.title}`;
        //     },
        //     set() {
        //         console.log('Set');
        //     }
        // }
    }
});

console.log(vm);

// 当某个操作性能开销比较大的时候，就用 计算属性，如果不想缓存值，那就使用 方法

// setTimeout(() => {
//     vm.msg = 'steel';
// }, 2000);

// setTimeout(() => {
//     vm.title = '标题';
// }, 3000);

setTimeout(() => {
    vm.reverseMsg = 'reverseMsg';
}, 3000);