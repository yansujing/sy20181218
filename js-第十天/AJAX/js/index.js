

// AJAX(Asynchronous Javascript And XML):sxXML，是一种技术规范

// 在没有 AJAX技术之前，浏览器的一次 http请求 就对应一个 Web页面，这也是 Web运作的原理

// 如果想要保持用户停留在当前页面的同时又能够发送 http请求，必须使用 js 来发送请求，接收到数据之后就可以更新 页面

// 作用：在不刷新页面的情况下与后端进行数据交互


// 在 js 中，通过 XMLHttpRequest 对象来实现 AJAX 请求

console.log(XMLHttpRequest);

// 通过 XMLHttpRequest 来发送 AJAX请求的步骤

// 1.通过 XMLHttpRequest构造函数来 创建 一个 XMLHttpRequest对象
// 2.在 XMLHttpRequest对象上设置 一些 回调函数
// 3.配置请求，通过 XMLHttpRequest对象的 open()方法，参数1:请求类型，参数2：请求的url地址（接口url），参数3：指定是否异步，默认是true
// 4.发送请求，通过 XMLHttpRequest对象的 send()方法

var request = new XMLHttpRequest();

// request.readystate:请求的状态对象
// 0:请求还未被初始化
// 1:服务器连接已建立
// 2:请求已被服务器接收
// 3:请求正在处理中
// 4:请求已完成并且响应已就绪

request.onreadystatechange = function () {
    if (request.readyState === 0) {
        console.log('请求还未被初始化');
    }
    if (request.readyState === 1) {
        console.log('服务器连接已建立');
    }
    if (request.readyState === 2) {
        console.log('请求已被服务器接收');
    }
    if (request.readyState === 3) {
        console.log('请求正在处理中');
    }
    if (request.readyState === 4) {
        console.log('请求已完成并且响应已就绪');

        if (request.status === 200) {
            console.log(JSON.parse(request.responseText));
        }
    }
}


// 最常见的2个请求类型
// 1.GET
// 2.POST

// GET：
// 1.获取一些服务器上一些静态资源
// 2.发送的数据在请求的url查询参数中，?key=value&key=value
// 3.请求会被浏览器缓存
// 缺点：
//    1.直接暴露了发送的数据
//    2.发送的数据大小有限制，一般不能超过7713字符，不同浏览器大小限制是不一样的

// 当发送请求的数据比较小的时候，才能使用 GET请求

// POST:
// 1.请求发送的数据在 请求体中,表单形式key=value&key=value
// 2.请求不会被缓存
// 3.请求发送的数据大小没有限制


request.open('GET', 'https://www.apiopen.top/weatherApi?city=杭州');

// request.send();

console.log(1111111);


// http://www.bozedu.net:8888/article/main/index
// 页码：page
// 每页显示个数:limit

request.open('POST', 'http://www.bozedu.net:8888/article/main/index');

// 设置 Content-Type
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// request.setRequestHeader('Content-Type', 'application/json');

request.send('page=2&limit=10');




// https://www.apiopen.top/weatherApi?city=杭州

// 一个url中?后面的数据 称为 url查询参数




