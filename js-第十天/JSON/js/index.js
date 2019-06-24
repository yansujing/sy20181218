


// JSON：全称 Javascript Object Natation(Javascript对象表示法)

// JSON是一种数据交换格式，本质上是一个字符串，使用一个字符串来表示一个js对象信息

// JSON是目前主流的 前后端 数据交换格式


// JSON有6种数据类型（和js中的数据类型是一样的）
// number
// string
// boolean
// array
// object
// null


var obj1 = {
    "name": "Bao",
    "age": 28
}

// JSON字符串中的键和值双引号不能省略，而且不能使用单引号，双引号是JSON中的标准规范
var obj1JSON = '{"name":"Bao","age":28}';

console.log(JSON);

// JSON.stringify():将js对象转换成JSON字符串
// JSON.parse():将JSON字符串转换成js对象

console.log(JSON.stringify(obj1));

// 如果转换出错，说明参数不是有效的JSON字符串
console.log(JSON.parse(obj1JSON));


var arr1 = [
    {
        name: 'name1',
        age: 21
    },
    {
        name: 'name2',
        age: 23
    }
];

console.log(JSON.stringify(arr1));

var num = 23;

console.log(JSON.stringify(num));

var fn1 = function () { };

console.log(JSON.stringify(fn1));

// // 日期对象

console.log(JSON.stringify(new Date()));



// JSON.stringify()不能转换的数据类型
// undefined

console.log(JSON.stringify({
    name: undefined,
    age: 25
}));

// 函数

// 正则，解析成 {}
console.log(JSON.stringify(/abc/g));

// Infinity,NaN，解析成 null
console.log(JSON.stringify({
    num: Infinity,
    num1: NaN
}))


// 函数，正则，undefined，Infinity，NaN都是无法正确转换的







