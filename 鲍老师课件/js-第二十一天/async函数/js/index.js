


// async函数：为了使 异步任务的代码 更加简洁清晰，能够使用同步代码的编写方式来 完成 异步任务

// 1.async函数内部 可以有 await关键字，await 后面跟上某个 异步任务（一般情况下是 Promise对象，如果不是Promise对象，会被转换成一个reslove状态的Promise对象）

// 2.只有 async函数内 可以有 await 关键字

// 3.await 表示 await后面的表达式 需要等待结果

// 4.async函数的返回值是一个 Promise对象

// 5.async函数不会阻塞代码：因为 当执行到 await的时候，浏览器会先 退出异步函数，等到 异步任务有结果的时候，再继续回到async函数内执行后面的代码

// 6.await 返回的是 Prmose对象的 resolve时的 结果

// 7.当 await 后面的 Promise对象的状态 变为 reject时，async函数会立即中断执行

// 8.async函数内部的 return 值，会传递给 then方法的 回调函数


// 创建 async函数，通过 async 关键字

// 声明形式

async function fn1() { }

// 表达式形式

const fn2 = async () => {

}



function ajaxPromise(obj) {
    return new Promise((resolve, reject) => {

        var request = new XMLHttpRequest()

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject('出错了');
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

    });
}

// ajaxPromise({
//     url: 'http://www.bozedu.net:8888/article/main/index',
//     method: 'POST',
//     async: true,
//     data: 'page=1&limit=6',
//     dataType: 'form'
// }).then(data => {
//     console.log(data);
// }).catch(status => {
//     console.log(status);
// });



async function asyncFn() {

    const obj = {
        url: 'http://www.bozedu.net:8888/article/main/index111',
        method: 'POST',
        async: true,
        data: 'page=1&limit=6',
        dataType: 'form'
    }



    try {
        const data = await ajaxPromise(obj);
    } catch (err) {
        console.log(err);
    }

    console.log(2222);

    console.log(data);

    // return 123;

}

asyncFn().then(data => {
    console.log(data);
}).catch(status => {
    console.log(status);
})

console.log(1111);




// try{
//   可能会出错的代码
// }catch(err){
//   捕获错误信息
// }finally{
//  不管是否捕获到错误都会执行
// }

try {
    const str = 'hello';

    str.push('world');
} catch (err) {
    console.log(err);
} finally {
    console.log('finally');
}


console.log(1111111);





