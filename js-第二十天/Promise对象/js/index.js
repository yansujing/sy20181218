

// Promise对象

// 作用：异步编程的一种解决方案（封装异步任务的一种解决方案）

// Promise是一个构造函数，用来生成Promise对象

// Promise构造函数接收一个函数作为参数，并且这个函数会被立即调用，函数内的代码会立即执行
// resolve和reject都是函数，是 Promise对象的2个状态

// resolve函数被调用：Promise对象的状态 变为 resolve(成功)
// reject函数被调用：Promise对象的状态 变为 reject(失败)

// resolve:
const p1 = new Promise(function (resolve, reject) {
    // 异步任务

    console.log(resolve, reject);

    $.ajax({
        url: 'http://www.bozedu.net:8888/article/main/index',
        methods: 'POST',
        data: 'page=1&limit=5',
        success(data) {
            console.log(data);
            resolve(data);
        },
        error(xhr, status) {
            // console.log('error');
            console.log(status);
            reject(status);
        }
    });

});

console.log(11111111);

console.log(p1);

console.log(Promise.prototype);

// Promise对象的方法

// then(回调函数):回调函数，在 Promise对象的状态变为 resolve时 被调用，返回值还是 那个Promise对象
// catch(回调函数):回调函数，在Promise对象的状态变为 reject时 被调用，返回值还是 那个Promise对象
// finally(回调函数):回调函数，不管Promise对象的状态是什么，都会被调用

// p1.then(function (data) {
//     // data:Promise对象中 调用 resolve方法时 传递的数据
//     console.log(data);
// });

// p1.catch(function (data) {
//     console.log(data);
// });

// p1.finally(function () {
//     console.log('finally');
// });

console.log(p1.then());

p1.then(function (data) {
    console.log(data);
}).catch(function (status) {
    console.log(status);
}).finally(function () {
    console.log('finally');
});


// Promise任务不会阻塞代码


// Promise对象的出现 是为了 解决异步任务中 回调函数的多层嵌套问题（回调地狱



// $.ajax({
//     url: 'http://www.bozedu.net:8888/article/main/index',
//     methods: 'POST',
//     data: 'page=1&limit=5',
//     success(data) {
//         console.log(data);


//         $.ajax({
//             url: 'http://www.bozedu.net:8888/article/main/detail',
//             methods: 'GET',
//             data: 'id=72',
//             success(data) {
//                 console.log(data);


//                 $.ajax({
//                     url: 'https://www.apiopen.top/weatherApi',
//                     methods: 'GET',
//                     data: 'city=杭州',
//                     success(data) {
//                         console.log(data);


//                     }
//                 });
//             }
//         });
//     }
// });


function ajax1() {
    const p = new Promise(function (resolve, reject) {
        $.ajax({
            url: 'http://www.bozedu.net:8888/article/main/index',
            methods: 'POST',
            data: 'page=1&limit=5',
            success(data) {
                resolve(data);
            }
        });
    });

    return p;
}

function ajax2() {
    const p = new Promise(function (resolve, reject) {

        $.ajax({
            url: 'http://www.bozedu.net:8888/article/main/detail',
            methods: 'GET',
            data: 'id=72',
            success(data) {
                resolve(data);
            }
        });
    });

    return p;
}

function ajax3() {
    const p = new Promise(function (resolve, reject) {

        $.ajax({
            url: 'https://www.apiopen.top/weatherApi',
            methods: 'GET',
            data: 'city=杭州',
            success(data) {
                resolve(data);
            }
        });
    });

    return p;
}

ajax1().then(data => {
    console.log(1);

    // 拿到的是第一个接口的数据
    console.log(data);

    return ajax2();

}).then(data => {
    console.log(2);

    // 拿到的是第二个接口的数据
    console.log(data);

    return ajax3();

}).then(data => {
    console.log(3);

    // 拿到的是第三个接口的数据
    console.log(data);

});



