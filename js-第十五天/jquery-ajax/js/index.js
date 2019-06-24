

// jquery ajax

console.dir($);

// $.get(),$.post
// $.ajax():通用方法

// $.get({
//     url: 'http://www.bozedu.net:8888/article/main/detail11',
//     data: 'id=76',
//     // 请求成功
//     success: function (data) {
//         console.log(data);
//     },
//     // 请求出错
//     error: function (xhr, status) {
//         console.log(xhr, status);
//     },
//     // 不管请求失败还是成功，complete回调函数都会被调用
//     complete: function () {
//         console.log('complete');
//     }
// });

// $.post({
//     url: 'http://www.bozedu.net:8888/article/main/index',
//     data: 'page=2&limit=6',
//     contentType: 'application/x-www-form-urlencoded',
//     // 请求成功
//     success: function (data) {
//         console.log(data);
//     },
//     // 请求出错
//     error: function (xhr, status) {
//         console.log(xhr, status);
//     },
//     // 不管请求失败还是成功，complete回调函数都会被调用
//     complete: function () {
//         console.log('complete');
//     }
// });


$.ajax({
    method: 'GET',
    url: 'http://www.bozedu.net:8888/article/main/detail',
    data: 'id=76',
    // 请求成功
    success: function (data) {
        console.log(data);
    },
    // 请求出错
    error: function (xhr, status) {
        console.log(xhr, status);
    },
    // 不管请求失败还是成功，complete回调函数都会被调用
    complete: function () {
        console.log('complete');
    }
});

$.ajax({
    method: 'POST',
    url: 'http://www.bozedu.net:8888/article/main/index',
    data: 'page=2&limit=6',
    contentType: 'application/x-www-form-urlencoded',
    // 请求成功
    success: function (data) {
        console.log(data);
    },
    // 请求出错
    error: function (xhr, status) {
        console.log(xhr, status);
    },
    // 不管请求失败还是成功，complete回调函数都会被调用
    complete: function () {
        console.log('complete');
    }
});