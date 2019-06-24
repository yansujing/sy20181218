

// apply与call方法，函数的方法

// 作用一样的：改变函数内部的 this 指向，并且调用当前函数

// apply(): 2个参数，1：需要绑定的this变量，2：当前函数需要的参数数组

// call(): 1：需要绑定的this变量，2：就是需要传的参数

console.dir(Function.prototype);

var name = 'Bao';

function fn1(str1, str2) {
    console.log(str1, str2);
    console.log(this.name);
}

// fn1();

var obj = {
    name: 'Steel'
}

var obj1 = {
    name: 'Wang'
}

fn1.apply(obj, ['Hello', 'World']);

fn1.call(obj, 'Hello', 'World');

fn1.apply(obj1);


var count = 0;

// console.log(parseInt('10'));
// count++;
// console.log(parseInt('321'));
// count++;
// console.log(parseInt('4324'));
// count++;
// console.log(parseInt('56435'));
// count++;
// console.log(parseInt('65436'));
// count++;
// console.log(parseInt('65436'));
// count++;

var oldParseInt = window.parseInt;

window.parseInt = function () {

    count++;

    // 当不需要改变函数中的this指向时，传 null 空值
    return oldParseInt.apply(null, arguments);
}

console.log(parseInt('10'));
console.log(parseInt('10'));
console.log(parseInt('10'));
console.log(parseInt('10'));
console.log(parseInt('10'));

console.log(count);








