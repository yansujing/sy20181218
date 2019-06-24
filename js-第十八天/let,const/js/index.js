
// ECMA:欧洲计算机制造商协会

// ES6:ECMAScript 6.0/ECMAScript 2015，是Javascript的下一代标准

// ES6规范是向后兼容的，不管规范如何发展，es5代码始终都能在浏览器中正确执行


// let，const：声明变量的关键字

// 使用 var关键字声明的变量 有2中作用域（全局/局部）

// let，const声明变量 只有一种作用域（块作用域）：变量只能在当前代码块{}内有效
// es6中 没有全局作用域和局部作用域，只有块作用域

// {

//  let a;
//  const b;

// }

// let:声明常规变量
// const:声明只读的常量


function fn1() {
    // a1:局部变量
    var a1 = 123;

    let a2 = 456;
}

// i:全局变量
for (var i = 0; i < 4; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

console.log(i);

// 此时j变量只在当前循环内有效，每次循环j都是一个新变量
for (let j = 0; j < 4; j++) {
    setTimeout(function () {
        console.log(j);
    }, 1000);
}

// console.log(j);

// let 声明的变量 不存在 变量提升，变量必须先声明后使用
console.log(a1);
var a1 = 2;

// console.log(a2);
let a2 = 12;


// const:声明只读的常量,常量的值不能被修改，否则报错
const pi = 3.1415926;
console.log(pi);

// pi = 3.14;

const obj1 = {
    name: 'Bao'
};
console.log(obj1);

// obj1这个变量存储的指针没有改变
obj1.name = 'Steel';
console.log(obj1);

// obj1 = {};



// 顶层对象 window的属性
// 使用 var声明的全局变量会成为 window的属性
console.log(window.a1);

// 使用let,const声明的变量不会成为 window的属性

let a3 = 123456;
console.log(window.a3);




let a = 3;

function fn2() {
    let a = 1;

    // console.log(b);

    function fn3() {
        let a = 2;
        let b = 12;
        console.log(a);
    }
    fn3();
}
fn2();
