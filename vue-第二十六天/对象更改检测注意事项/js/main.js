


// 对象更改检测注意事项

// Vue不能检测到 对象属性的 变化（添加和删除）

// 因为 在 Vue实例的 创建过程中才将 data中的 属性 转换为 存储器属性的

// 在开发中，推荐 在 Vue实例创建 过程中 就应该 将 所有的响应式数据 全部定义好

const vm = new Vue({
    el: '#app',
    data: {
        str: 'Steel',
        age: 28,
        obj: {
            age: 28,
            name: 'Steel'
        }
    }
});

console.log(vm);

vm.age = 28;

vm.obj.name = 'Steel';

console.log(vm);

