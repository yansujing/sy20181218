

// 对象的扩展

// 1.对象属性的简洁表示法，当对象的键和值相同的时，可以简写

let name = 'Steel';

// const obj1 = {
//     name: name
// }

// 简写形式
const obj1 = {
    name
}
// 属性名就是变量名，属性值就是变量值

function fn1(name, age) {

    return {
        name,
        age
    }
}
console.log(fn1('Steel', 28));

// 对象中的方法也可以简写

// const obj2 = {
//     age: 28,
//     run: function () {
//         console.log(`今年${this.age}岁`);
//     }
// };
// 简写形式
const obj2 = {
    age: 28,
    run() {
        console.log(`今年${this.age}岁`);
    }
};

obj2.run();

// 对象中的方法 有 name属性

console.log(obj2.run.name);


// Object.is():比较2个值是否严格相等

console.log(Object.is('111', '111'));
console.log(Object.is(NaN, NaN));

console.log(NaN === NaN);

console.log(+0 === -0);
console.log(Object.is(+0, -0));

console.log(Object.is({ name: 'Bao' }, { name: 'Bao' }));

// Object.assign(targrt,obj1,obj2,obj3.......):合并和复制对象的属性
// target：目标对象，合并和复制对象的的所有属性 赋值的对象
// obj1，obj2...:源对象

const tar = {};

console.log(Object.assign(tar, { name: 'Steel' }, { age: 28, name: 'Wei' }, { run: function () { } }));

console.log(tar === Object.assign(tar, { name: 'Steel' }, { age: 28, name: 'Wei' }, { run: function () { } }));


// Object.keys(),Object.values(),Object.entries()
// 返回一个数组，元素是 可遍历的对象

console.log(Object.keys(obj2));

console.log(Object.values(obj2));

console.log(Object.entries(obj2));


const { keys, values, entries } = Object;

for (let item of keys(obj2)) {
    console.log(item);
}

for (let item of values(obj2)) {
    console.log(item);
}

