

// axios 插件

// 是一个 基于 promise 的 可用于浏览器端和node环境的 http请求插件

// 它也是 Vue项目中常用的http请求插件

// axios对象 是 axios插件提供的
console.dir(axios);


// 配置全局性的 默认值
console.log(axios.defaults);
axios.defaults.baseURL = 'http://www.bozedu.net:8888/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';


// axios拦截器
// 1.请求拦截器
// 2.响应拦截器

// 作用：对 请求和响应 做 全局处理

// 1.设置请求拦截器：axios.interceptors.request.use(回调函数，回调函数)
// 第一个回调函数在 请求之前被调用，接收 config 对象作为参数
// 第二个回调函数在 请求出错时被调用，接收 error对象作为参数

// 拦截器要在 请求 之前 设置
axios.interceptors.request.use(config => {
    console.log(config);

    // if (config.method === 'post') {
    //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // }

    // 一定要 返回 config对象
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// 响应拦截器，参数2个回调函数
// 第一个回调函数在 响应之后被调用，接收 响应数据 作为参数
// 第二个回调函数在 响应出错时调用，接收 error对象 作为参数
axios.interceptors.response.use(data => {
    console.log(data);

    return data;
}, error => {
    console.log(error);
    // Promise.reject(reason)方法返回一个带有出错原因的Promise对象
    return Promise.reject(error);
});


// get请求，通过 axios.get():返回值是一个 promise对象
// axios.get('http://www.bozedu.net:8888/article/main/detail?id=72').then(responseData => {
//     // 自动转换JSON数据
//     responseData:axios插件处理过后的一个对象
//     console.log(responseData.data);
// });

// 传一个配置对象

// 配置对象
// {
//     method:请求类型,
//     url:请求url,
//     params:get请求的参数,
//     data:post请求发送的数据,
//     headers:设置请求头,
//     timeout:设置请求的超时时间,
//     baseURL:设置请求url的基准url
// }

// axios.get('article/main/detail', {
//     baseURL: 'http://www.bozedu.net:8888/',
//     params: {
//         id: '72'
//     }
// }).then(responseData => {
//     console.log(responseData.data);
// });

// post请求：axios.post():1.url,2.发送的数据,3.请求的配置对象
// axios.post('http://www.bozedu.net:8888/article/main/index', 'page=1&limit=2').then(responseData => {
//     console.log(responseData);
// });

// axios.post('http://www.bozedu.net:8888/article/main/index', {
//     page: 1,
//     limit: 4
// }, {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     }).then(responseData => {
//         console.log(responseData);
//     });


// axios()
// axios({
//     method: 'get',
//     params: {
//         id: '72'
//     },
//     url: 'http://www.bozedu.net:8888/article/main/detail'
// }).then(responseData => {
//     console.log(responseData);
// });

// axios({
//     method: 'post',
//     data: {
//         page: 1,
//         limit: 3
//     },
//     url: 'http://www.bozedu.net:8888/article/main/index1',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// }).then(responseData => {
//     console.log(responseData);
// }).catch(error => {
//     console.log(error);
// });

let cancel1;
let cancel2;

function detail() {
    return axios({
        method: 'get',
        url: 'article/main/detail',
        params: {
            id: '72'
        },
        // cancelToken用于取消请求
        cancelToken: new axios.CancelToken(function executor(c) {
            cancel1 = c;
        })
    });
}

function list() {
    return axios({
        method: 'post',
        url: 'article/main/index',
        data: {
            page: 1,
            limit: 3
        },
        cancelToken: new axios.CancelToken(function executor(c) {
            cancel2 = c;
        })
    });
}

// 并发执行多个请求：axios.all()，参数：[promise对象，promise对象，promise对象，promise对象....]，返回值是 promise对象
axios.all([detail(), list()]).then(
    // 当两个请求都完成时调用spread方法中的回调函数
    axios.spread((data1, data2) => {
        console.log(data1, data2);
    })
).catch(error => {
    console.log(error);
});

// cancel1();
// cancel2();





