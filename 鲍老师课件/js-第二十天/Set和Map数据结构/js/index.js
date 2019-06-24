

// Set和Map数据结构

// Set:类似于数组的一种数据结构，但它里面元素不允许出现重复值
// Set本身是一个构造函数，用来生成 Set 对象

const s1 = new Set();
console.log(s1);

// Set可以接收一个数组或者类似数组的对象作为参数来初始化 Set 数据

const s2 = new Set([1, 2, 3, 4, 5, 6]);
console.log(s2);

// Set 对象中如果有重复项，重复项会被自动去除

let arr = [1, 2, 3, 1, 3, 4, 5, 4];

console.log(new Set(arr));

console.log(...new Set(arr));

// Set对象可以使用 ...进行展开
function removeRepeat(arr) {
    return [...new Set(arr)];
}

console.log(removeRepeat([2, 3, 2, 4, 3, 6, 6, 8, 2]));

// Set对象的一些方法
// add()：向Set对象中添加元素

const s3 = new Set();

s3.add(1);
s3.add(1);
s3.add(NaN);
s3.add(NaN);
// Set对象中，NaN等于自身

const obj1 = { name: 'Steel' };

s3.add({ name: 'Steel' });
s3.add(obj1);

console.log(s3);

// delete():参数：要删除的某一项
// s3.delete(1);
// s3.delete(obj1);
// s3.delete(NaN);

console.log(s3);

// clear()
// s3.clear();

console.log(s3);

// has()
console.log(s3.has(1));
console.log(s3.has(obj1));

// size属性

console.log(s3.size);


// Set对象可以 通过Array.from() 转换为数组

console.log(Array.from(s3));

// 遍历

// keys()
// values()
// entries()

for (let item of s3) {
    console.log(item);
}

for (let item of s3.keys()) {
    console.log(item);
}

for (let item of s3.values()) {
    console.log(item);
}

for (let item of s3.entries()) {
    console.log(item);
}

// Set对象的键值是相同的，因为Set是没有键名的

console.log([...s3][1]);

// console.log(s3);

let lis = document.getElementsByTagName('li');
console.log(new Set(lis));


const s4 = new Set([1, 2, 3, 4, 1, 2, 4, 5, 6]);

const arr1 = [...s4].filter(item => item > 3);
console.log(arr1);

let arr2 = [1, 2, 3];
let arr3 = [3, 4, 5];

const s5 = new Set([...arr2, ...arr3]);
console.log(s5);



// Map数据结构：类似于对象的一种数据结构，Map对象中的键可以是 任何数据类型

const obj2 = {
    'a': 12,
    'b': 'Steel'
};
console.log(obj2);
// Object对象的 键 必须是 字符串类型

// 通过传一个数组来初始化Map对象的数据
const m1 = new Map([['a', 12], ['b', 'Steel']]);
console.log(m1);


const obj3 = { name: 'Steel' };
const m2 = new Map([[12, 12], [obj3, 'Steel']]);
console.log(m2);


// set(),get(),delete(),clear(),has()

m2.set([], 123);

console.log(m2);

console.log(m2.get(12));

console.log(m2.get(obj3));


// 遍历操作
// keys()
// values()
// entries()

for (let item of m2) {
    console.log(item);
}

for (let item of m2.keys()) {
    console.log(item);
}

for (let item of m2.values()) {
    console.log(item);
}

for (let [item1, item2] of m2.entries()) {
    console.log(item1);
}

console.log(Array.from(m2));

console.log(...m2);