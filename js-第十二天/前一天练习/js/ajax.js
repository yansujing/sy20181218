

// var obj = {
//     method: 'POST',
//     url: 'url',
//     async: false,
//     data: 'page=1',
//     dataType: 'json',
//     callback: function (data) {

//     }
// }


function ajaxfn(obj) {

    var request = new XMLHttpRequest()

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                obj.callback(request.responseText);
            }
        }
    }

    if (obj.method === 'GET') {
        request.open(obj.method, obj.url + '?' + obj.data, obj.async);
        request.send();
    }

    if (obj.method === 'POST') {
        request.open(obj.method, obj.url, obj.async);

        if (obj.dataType === 'form') {
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        if (obj.dataType === 'json') {
            request.setRequestHeader('Content-Type', 'application/json');
        }

        request.send(obj.data);
    }

}


// 回调函数：本质上是函数，在特定事件或条件下由某一方调用，对事件和条件作出响应的函数就是 回调函数

function fn1(b) {
    console.log('fn1');

    setTimeout(function () {
        b();
    }, 1000);
}

// 函数b此时就可以称为是回调函数
function b() {
    console.log('b');
}

fn1(b);