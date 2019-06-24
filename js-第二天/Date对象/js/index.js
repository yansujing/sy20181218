
// Date对象：日期对象

console.log(Date);

var date1 = new Date();

// 本地计算机的系统时间
console.log(date1);

// 返回年份
console.log(date1.getFullYear());

// 返回月份，月份从 0 开始
console.log(date1.getMonth() + 1);

// 返回 日
console.log(date1.getDate());

// 返回星期
console.log(date1.getDay());

// 返回时
console.log(date1.getHours());

// 返回分
console.log(date1.getMinutes());

// 返回秒
console.log(date1.getSeconds());

// 返回毫秒
console.log(date1.getMilliseconds());


// 返回1970.1.1到现在的毫秒数
console.log(date1.getTime());


// 自定义日期
var date2 = new Date(2015, 4, 18, 15, 25, 32);
var date3 = new Date("2015/4/15,09:56:09");
console.log(date2);
console.log(date3);

