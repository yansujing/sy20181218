

// 变量的解构赋值

// 解构赋值：es6中可以通过一种模式（等号2边模式相同-不同时会自动转换），从数组或对象中提取值，然后对变量进行赋值，就是解构 赋值

let arr = [1, 2, 3];

let a = arr[0];
let b = arr[1];
let c = arr[2];


let [, d,] = [1, 2, 3];

console.log(d);


// 数组的解构赋值，对象的解构赋值，字符串的解构赋值，数值和布尔值的解构赋值，函数参数的解构赋值

// 数组的解构

const arr1 = [1, 2, 3, 4, 5, 6, 7];

const [f, j, , h] = arr1;
console.log(f, j, h);

// 数组的解构赋值 是按照数组元素的顺序进行一一赋值的

// 对象的解构赋值

// 对象的属性没有顺序，解构赋值时必须通过 对象中key值 来提取值
// {key:变量名}
const { age: age1, name: name1 } = { name: 'Bao', age: 28 };
console.log(age1, name1);

// 字符串的解构赋值,解构赋值时，如果等号右边的模式与等号左边的不匹配，就会将=右边的模式转换成=左边的模式，再进行赋值
let [i, l, m] = 'hello';

// 浏览器会将上面的代码转换成以下代码
// let [i, l, m] = ['h', 'e', 'l', 'l', '0'];
console.log(i, l, m);


let { length: len } = 'hello,world';

// let { length: len } = {length:11};
console.log(len);


// 数值和布尔值的解构赋值

var num1 = 123;

console.log(num1.toString());

let { toString: fn1 } = num1;

console.log(fn1 === Number.prototype.toString);

let { toString: fn2 } = true;

console.log(fn2);


// 函数参数的解构赋值
// function fn3(x, y) {

// }
// fn3(1, 2);

function fn3([x, y]) {
    console.log(x, y);
}
fn3([1, 2]);

function fn4({ x: x, y: y }) {
    console.log(x, y);
}
fn4({ x: 1, y: 2 });
