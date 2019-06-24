

// js对象的存储器属性

// 存储器属性：使用 get(拦截对象属性的取值操作)和set(拦截对象的存值操作)定义的属性称为 存储器属性

const obj = {
    // 称为 obj的 普通属性
    name: 'Steel',

    // age是对象的 属性名，也是get函数名
    get age() {
        console.log('Get');
        return 28;
    },

    set age(value) {
        console.log('Set');
        console.log(value);

        document.getElementById('h1').innerText = value;
    }
};

console.log(obj.age);

obj.age = 18;

console.log(obj.age);

// Vue 就是利用了 js对象的 存储器属性 实现 响应式数据

// 通过 Object.defineProperty() 来将 data 中的所有普通属性全部转换为 存储器属性，从而拦截 data属性的 存取操作

Object.defineProperty(obj, 'name', {
    get() {
        console.log('name---get');
        return 'Steel'
    },
    set(value) {
        console.log(value);
    }
});

console.log(obj.name);

obj.name = 'Hello';

