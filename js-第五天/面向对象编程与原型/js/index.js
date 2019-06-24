

// 面向对象

// 在js中一切都是对象，都是通过相应的 构造函数（new关键字） 生成（实例化出）具体的 对象

var arr = [1, 2, 3];

// var arr = new Array(1, 2, 3);

var str = 'Bao';

// var str = new String('Bao');


// 自定义 构造函数

function Person(name, age) {
    // 构造函数中的 this 指向 构造函数实例化出的对象
    console.log(this);

    this.name = name;
    this.age = age;

    this.run = function () {
        console.log(this.name + '正在跑');
    }
}

var xiaoming = new Person('小明', 18);

console.log(xiaoming);

xiaoming.run();

var xiaohuang = new Person('小黄', 20);

console.log(xiaohuang);

xiaohuang.run();



// var xiaohuang = {
//     name: '小黄',
//     age: 17
// }

// var xiaohong = {
//     name: '小红',
//     age: 25
// }


// 原型链与原型继承

// xiaoming这个对象的原型链
// 小明 ---> Person.prototype ---> Function.prototype ---> Object.prototype ---> null

// 原型继承
// 当我们访问一个对象上的属性或者方法时，浏览器会先 看当前对象上有没有这个属性或者方法，如果没有，就一直向它的原型对象上查找属性或者方法
// 如果最后都没有找到，就会报错



var arr = [1, 2, 3]

// arr对象上可以访问push方法，是因为 它继承了 Array.prototype上的 push 方法
// arr.push()


Array.prototype.aa = 100;

Array.prototype.add = function () {

    console.log(this);

    var copy = this.slice(0);

    copy.push(copy[0]);

    return copy;
};

var arr1 = [1, 2, 3];

var arr2 = [2, 3, 4];

console.log(arr1.aa);
console.log(arr2.aa);

console.log(arr1.add());
console.log(arr2.add());