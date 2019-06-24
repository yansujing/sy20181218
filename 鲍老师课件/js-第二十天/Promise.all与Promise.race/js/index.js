

function ajax1() {
    const p = new Promise(function (resolve, reject) {
        $.ajax({
            url: 'http://www.bozedu.net:8888/article/main/index',
            methods: 'POST',
            data: 'page=1&limit=5',
            success(data) {
                resolve(data);
            },
            error(xhr, status) {
                reject(status);
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


// Promise.all(),Promise.race()


// Promise.all():用来并行执行多个 Promise任务

// Promise.all([p1, p2, p3]),p1,p2,p3:都是Promise对象
// all方法返回值是 一个新的 Promise对象

// p1,p2,p3状态都为 resolve时，Promise.all().then()会被调用
// p1,p2,p3只要有一个 状态为 reject，就会调用.catch会被调用


Promise.all([ajax1(), ajax2(), ajax3()]).then(data => {
    console.log(data);
}).catch(status => {
    console.log(status);
});

// 应用场景：网页游戏的资源加载

// Promise.race():一旦有 Promise任务完成 就会调用then方法
// 有 Promise任务的状态 变为 reject 就会调用 catch方法

Promise.race([ajax1(), ajax2(), ajax3()]).then(data => {

    console.log(data);
}).catch(status => {
    console.log(status);
});

// 