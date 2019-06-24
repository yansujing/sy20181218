

// 函数的扩展

// 函数参数可以设置默认值

function fn1(x, y) {
    x = x || 0;
    y = y || 0;

    console.log(x, y);
}

fn1(1, 2);

// 定义形参这个变量时就可以直接设置默认值
function fn2(x = 0, y = 0) {
    console.log(x, y);
}

fn2();
fn2(3, 4);

// 函数的 name 属性
console.log(fn1.name);
console.log(fn2.name);


// 箭头函数
// es6可以 使用 ‘=>’ 来定义函数

// const fn3 = function () {

// }

// fn3就是箭头函数
const fn3 = (x = 0, y = 0) => {
    console.log(x, y);
}

fn3();
fn3(1, 2);

// 1.箭头函数内部 没有自己的this关键字，它的 this 是从外部继承下来的（箭头函数中的this指向定义时所在的对象）,this不变的

// 2.箭头函数由于内部没有自己的this，所以不可以作为 构造函数来使用，也就是说不能使用 new关键字

// 3.箭头函数内部 没有 arguments对象，可以使用 rest参数 代替

const Person = (name, age) => {

    console.log(this);
    this.name = name;
    this.age = age;


}

// const xiaohuang = new Person('小黄', 23);

const fn4 = () => {
    console.log(this);
}

fn4();

const obj = {
    name: 'Steel',
    age: 23,
    run: () => {
        console.log(this);

        setTimeout(() => {
            console.log(this);
        }, 200);
    }

    // run() {
    //     console.log(this);

    //     setTimeout(() => {
    //         console.log(this);
    //     }, 200);
    // }
}

obj.run();

const arr = [1, 2, 3];

// arr.map(function(){

// });

arr.map((item) => {
    console.log(item);
});

// 当函数内部只有一行 return语句时，可以省略 {},return


const obj1 = {
    name: 'Steel',
    age: 23,
    run: () => 'hello world'
}

console.log(obj1.run());

// 箭头函数只有一个参数时,()可以省略
arr.map(function (item) {
    return item * item;
});

console.log(arr.map(function (item) {
    return item * item;
}));

console.log(arr.map(item => item * item));

// 对象中的方法一般不使用箭头函数


const obj2 = {
    name: 'Steel',
    age: 23,
    run() {
        console.log(this);
        let fn1 = () => {
            console.log(this);
            setTimeout(function () {
                console.log(this);
            }, 100)
            function fn2() {
                console.log(this);
                let fn3 = () => {
                    console.log(this);
                }
                fn3();
            }
            fn2();
        }
        fn1();
    }
}

obj2.run();