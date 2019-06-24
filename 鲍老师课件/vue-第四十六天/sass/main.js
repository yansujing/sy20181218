

// sass：是一种 css 预处理器，100%兼容css，可以简化css代码，提高css代码的灵活性和可读性

// 1.变量，以 $符号开头：$red:'red'

// .p{
//     color:$red
// }

// 转换成：
// .p{
// color:'red'
// }

// 2.嵌套
// .div{
//     color: $red
//     a{
//         font-size: '25px';
//         .p{
//             line - height: 1
//         }
//     }
// }

// 转换成：
// .div{
//     color:'red';
// }

// .div a{
//     font-size: '25px';
// }

// .div a.p{
//     line-height: 1
// }

// 3.混合：@mixin 定义混合，使用 @include 使用混合
// @mixin myMixin{
//     color:'red',
//     font-size:'20px';
// }

// .p{
//     @include myMixin;
//     color:'blue'
// }

// 转换成：
// .p{
//     color:'red',
//     font-size:'20px';
// }

// 4.运算 +-*/

// .p{
//     width:500px/2
// }

// 转换成：
// .p{
//     width:250px;
// }

// 5.函数，@function 定义函数 @return 返回值
// @function pxToVw($n) {
//     @return (100 / 375 * $n) * 1vw
// }

// .p{
//     font-size:pxToVw(20);
// }

// 转换成：
// .p{
//     font-size:1vw;
// }


// 在 Vue cli3中 使用 sass
// 1.安装 sass-loader 和 node-sass
// 2.给 Vue组件的 <style> 设置 lang='scss', <style lang='scss'>
// scss是sass的最新语法