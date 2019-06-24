


// 列表过渡

// 当同一时间有多个元素/组件要应用过渡时，要使用 transition-group组件
// 与 transition组件的区别
// 1.以真实元素作为 过渡的元素的 容器，默认是 span元素，也可以 通过 tag props属性 更改 容器元素，值是 元素字符串
// 2.过渡模式不可用
// 3.内部元素 必须设置 key属性


// v-move类：这个类 会在 元素进行过渡时，自动应用在 非过渡元素上
// move-class

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        flag1: false,
        flag2: true,
        num: 9,
        arr: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    methods: {
        add() {
            this.arr.push(this.num++);
        },
        del() {
            let index = Math.floor(Math.random() * this.arr.length);

            this.arr.splice(index, 1);
        }
    }
});







