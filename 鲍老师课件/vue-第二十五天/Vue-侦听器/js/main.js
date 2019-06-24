

// 侦听器：监听 某个data属性的变化，一旦 data属性发生变化，就会调用相关函数

const vm = new Vue({
    el: '#app',
    data: {
        msg: 'hello World!',
        obj: {
            name: 'Steel',
            age: 28
        }
    },
    watch: {
        msg(newValue, oldValue) {
            // this指向当前 Vue实例
            console.log(this);

            console.log(newValue, oldValue);
        },
        // 'obj.name'(newValue, oldValue) {
        //     console.log(newValue, oldValue)
        // }
        obj: {
            handler(newValue, oldValue) {
                console.log(newValue, oldValue)

                console.log(newValue === oldValue);
            },
            // 就可以监听对象属性的变化
            deep: true
        }
    }
});

setTimeout(() => {
    vm.msg = 'hello';

    vm.obj.name = 'Wei';

    vm.obj.age = 18;
}, 1000)

setTimeout(() => {
    vm.msg = 'world';
}, 2000)