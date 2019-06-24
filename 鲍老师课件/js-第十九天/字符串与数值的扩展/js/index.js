

// 字符串与数值的扩展

// 字符串扩展

// includes():返回布尔值，参数：字符串，表示是否找到参数字符串，找到返回true，否则false
// startsWith():返回布尔值，参数：字符串，表示参数字符串是否在原字符串的头部
// enndsWith():返回布尔值，参数：字符串，表示参数字符串是否在原字符串的尾部
// repeat(n):返回一个新字符串，参数：number值，表示将原字符串重复 n次

let str1 = 'hello, World!';

console.log(str1.includes('lloo'));

console.log(str1.startsWith('hee'));

console.log(str1.endsWith('d!'));

console.log(str1.repeat(5));

// 参数如果是小数，直接取整数部分
console.log(str1.repeat(2.9));

// 负数或者Infinity都会报错
// console.log(str1.repeat(-5));
// console.log(str1.repeat(Infinity));

console.log(str1.repeat(0));


// 模板字符串：用 ``（反引号）来表示，增强版的字符串，它本身可以当做是 普通字符串，但是它可以定义多行字符串，并且可以嵌入变量（通过${变量名}）

let str2 = 'hello';

let str3 = `he
llo`;
console.log(str3);

let name = 'Bao';
let age = 28;

console.log(name + '今年' + age + '岁');

console.log(`${name}今年${age}岁`);


// 数值的扩展

// Number.isFinite():用来检查一个数值是否有限，返回值是布尔值
// Number.isNaN():用来检查一个数值是否为NaN，返回值是布尔值
// Number.isInteger():用来检查一个数值是否为整数，返回值是布尔值

console.log(Number.isFinite(15));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(Math.pow(100, 1000)));
// 如果参数不是数值，一律返回false
console.log(Number.isFinite('1'));


console.log(Number.isNaN(12));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('44'));
console.log(Number.isNaN());
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN(Infinity));
// 如果参数不是NaN，一律返回false

console.log(Number.isInteger(25));
console.log(Number.isInteger(25.52));
console.log(Number.isInteger(25.0));
console.log(Number.isInteger('25'));
// 在js中，整数和浮点数是相同的存储方式，所以25和25.0当做是同一个值