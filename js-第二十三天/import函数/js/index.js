

// import()函数:参数：模块路径
// import()返回值是 Promise对象,可以通过 定义then方法来获取模块的对外接口

// 1.按需加载模块
// 2.条件加载

// if(){
//import(模块路径);
// }

console.log(import('./m1.js'));

import('./m1.js').then(data => {
    console.log(data);
});