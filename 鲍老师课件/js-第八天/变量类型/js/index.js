
// 声明一个变量，浏览器就需要给这个变量分配存储空间（内存）

// 变量类型分为值类型和引用类型
// 值类型：Number,String,Boolean
// 引用类型：Array，Function,Object

// 值类型：存储的是值
// 引用类型：存储的是一个指针，指向某个内存地址

var obj1 = {
    name: 'Bao',
    age: 28
}

var obj2 = obj1;

obj2.name = 'Steel';

console.log(obj1);

var num1 = 120;

var num2 = 20;

num2 = num1;

num2 = 99;

console.log(num1);


var arr1 = [1, 2, 3];

var arr2 = arr1;

arr2.push(4);

console.log(arr1);