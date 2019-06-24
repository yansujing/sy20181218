

// cookie

// 1.用于在某个页面中存储数据
// 2.主要用于存储信息量比较小的数据，（比如 用户名和密码），一般只能存储 4KB的数据，超出就会被截掉
// 3.cookie一般是由服务器端生成
// 4.cookie是 http 规范的一部分，它可以和服务器进行交互
// 当某个网站下存储了一些cookie之后，每次访问这个网站，浏览器都会把这个网站下的cookie信息发送给服务器

// 5.cookie数据存储有时间期限，可以手动设置某个cookie的过期时间，如果没有设置过期时间，则这个cookie就会在页面关闭之后销毁

// 6.每个页面存储cookie的数量也是有限制的

// 7.只能存储字符串

// 8.不同域名的网站不能共享cookie，也不能互相访问对方的cookie

// console.log(document.cookie);

var expiresDate = new Date();

expiresDate.setTime(expiresDate.getTime() + 10 * 1000);

console.log(expiresDate);


// 过期时间到了之后，浏览器是不会立即销毁这个cookie，不同浏览器有不同的cookie销毁机制
document.cookie = 'name=Bao; expires=' + expiresDate;

// 对cookie属性的赋值是添加
document.cookie = 'password=123456';

setTimeout(function () {
    console.log(document.cookie);
}, 20000);

// 设置cookie的函数
function setCookie(key, value, days) {
    var date = new Date();

    date.setTime(date.getTime() + (days * 24) * 3600 * 1000);

    console.log(date);

    document.cookie = key + '=' + value + '; expires=' + date;
}


setCookie('age', '28', 2);

// 根据key获取cookie值
function getCookie(key) {
    var cookieArr = document.cookie.split('; ');

    console.log(cookieArr);

    var returnVaule;

    cookieArr.map(function (item) {
        if (key === item.split('=')[0]) {
            returnVaule = item.split('=')[1];
        }
    });

    return returnVaule;
}

console.log(getCookie('name'));
console.log(getCookie('age'));
console.log(getCookie('hello'));

// 删除cookie
function deleteCookie(key) {
    setCookie(key, '', -1);
}

deleteCookie('age');