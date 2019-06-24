

// 数组的扩展

// Array.from():用于将类似于数组的对象和可遍历的对象（可使用for循环进行遍历的对象） 转换为 数组类型，返回一个新的数组

// 类似于数组的对象：HTMLCollection，nodeList，arguments

console.log(document.getElementsByTagName('li'));

// document.getElementsByTagName('li').map(function(){

// })

var lis = document.getElementsByTagName('li');

console.log(Array.from(lis));

Array.from(lis).map(function (item) {
    console.log(item);
})


// Array.of():用于将一组值转换为数组,弥补构造函数Array的不足

console.log(Array.of(1, 2, 3, 4, 5));

console.log(new Array(1, 2, 3, 4, 5));

console.log(new Array(5));
console.log(new Array(5, 8));

console.log(Array.of(10));

let arr1 = [1, 2, 3];

let arr2 = Array.of(1, 2, 3);


// 数组实例的一些常用方法
// includes():参数1：查询的值，参数2：索引，检测数组中是否包含相关的参数值

const arr3 = [1, 2, 3, 4, 5];

console.log(arr3.includes(1, 1));

// find()，findIndex():高阶函数
// find()：返回值是第一个 回调函数返回值为 true 的元素

const vaule1 = arr3.find(function (value, index, arr) {
    console.log(value, index, arr);

    return value > 6;
});

console.log(vaule1);

// findIndex()：返回值是第一个 回调函数返回值为 true 的元素索引
const vaule2 = arr3.findIndex(function (value, index, arr) {
    console.log(value, index, arr);

    return value > 3;
});
console.log(vaule2);


// 数组实例的 entries(), keys(),values()
// entries():返回遍历器对象，对键和值的遍历
// keys()：返回遍历器对象，对键的遍历
// values()：返回遍历器对象，对值的遍历

console.log(arr3);
console.log(arr3.entries());

// 通过 for...of 可以遍历 遍历器对象，只能遍历 有 迭代器接口 的对象


// for...of:es6中遍历对象的 通用方法

for (let item of arr3.entries()) {
    console.log(item);
}

for (let [index, item] of arr3.entries()) {
    console.log(index, item);
}

for (let index of arr3.keys()) {
    console.log(index);
}

for (let value of arr3.values()) {
    console.log(value);
}

const obj1 = {
    a: 1,
    b: 100,
    c: 'hello',
    d: function () {

    }
}

// 对象没有以上方法

console.log(String.prototype);

// Object.protopyte上没有 迭代器接口
for (let item of obj1) {
    console.log(item);
}




