

// 扩展运算符(...)
// 1.将数组或对象转换为使用,号分割的参数序列
// 2.获取数组、对象、函数参数的剩余值

// [1,2,3,4,5]  --->  1,2,3,4,5

// 数组
let arr1 = [1, 2, 3, 4];

console.log(...arr1);

console.log(1, 2, 3, 4);

let arr2 = [1, 2, 3];

let arr3 = [4, 5, 6, 7];

console.log(arr2.concat(arr3));

console.log([...arr2, ...arr3]);


// 对象
const obj1 = {
    name: 'Bao',
    age: 28,
    run: function () {
        console.log(this.name + '正在跑！');
    }
};

// console.log(...obj1);

const { name: x } = { ...obj1 };

console.log(x);

// 获取剩余值

// Uncaught SyntaxError: Rest element must be last element
// const [...a1, b1] = [1, 2, 3, 4];
// const [b1, ...a1, c1] = [1, 2, 3, 4];
// const [b1, ...a1, ...c1] = [1, 2, 3, 4, 5, 6];
// const [b1, ...a1, ,] = [1, 2, 3, 4, 5, 6];

const [b1, ...a1] = [1, 2, 3, 4, 5, 6];
console.log(a1);


const { name: a2, ...b2 } = obj1;
console.log(a2, b2);

const obj2 = {
    name: 'Steel',
    age: 25,
    talk: function () {
        console.log(this.name + '正在说话！');
    }
};

// const { ...obj4, obj5 } = obj1;

// 如果对象有相同的属性名，那么后出现的属性值作为 重复属性的最终值
const obj3 = { ...obj2, ...obj1 };

// new Object(...obj1, ...obj2)

console.log(obj3);


// 获取函数参数的剩余值
function sum(...rest) {
    console.log(arguments);
    console.log(rest);

}

sum([1, 2, 3]);
// const [...rest] = [1,2,3];
// const [...rest] = [[1, 2, 3]];

function sum1(a, b, ...rest) {
    console.log(rest);
}

sum1(1, 2, [3, 4], 'steel');