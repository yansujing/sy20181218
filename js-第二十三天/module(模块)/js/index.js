

// ES6 模块

// js 模块：是一个（可能）有对外暴露接口的独立js文件

// 前端开发的 2 种开发模式
// 1.脚本化开发：通过直接引入某些js文件来实现特定的功能
// 2.模块化开发：将一个项目的所有功能 分割为 一个个 独立的js模块文件，通过模块之间的 依赖关系 实现特定的功能

// 引入模块的原因
// 1.避免变量的 命名冲突
// 2.解决繁琐的js文件依赖
// 3.为 开发大型应用 做准备


// 使用 ES6 模块
// 1.定义 入口模块 文件并 引入 
// 通过 <script type='module' src=''></script>：type='module'是为了让浏览器将引入的js文件当做模块来处理
// 在chrome浏览器中 module 是 默认不支持跨域的，模块不支持 file协议访问


// export命令
// 一个模块就是一个独立的js文件，该模块内的所有 变量，外部都是无法获取的，所以需要 export命令来 输出当前模块想要暴露的接口，以供其它模块使用

// import命令
// 来定义当前模块 依赖 的其它模块
// 从其它模块导入接口
// 注意点：模块的路径不能使用 裸路径，必须是相对路径或者绝对路径


// export
// export命令后面必须是表达式（接口），不能是一个具体的值或变量
// 一个模块中可以有多个 export

// export 1;
// let a = 12;
// export a;

// export let a1 = 12;

// export let a2 = 115;

// export function fn1() {
//     console.log(1);
// };
// export const fn2 = function () {
//     console.log(2);
// }

// 一次导出多个变量（推荐写法）
// export { a1, a2, fn1, fn2 };

// 1.export命令不管在 模块中的任何位置，它都会被最后执行

// export { a3 };
// let a3 = 12;

// 2.export命名必须处于 模块的 最外层代码中（即不能处于块级作用域中）,在模块执行前就要确定 模块之间的依赖关系，不能在 运行时确定依赖关系

// if (true) {
//     export let a4 = 123;
// }

// 默认导出：export default（模块的默认输出）
// export default后面不能跟表达式，直接跟 值或者变量
// 一个模块只能有一个默认导出


// import命令
// 1.import命令有 提升效果（会被提升到模块的头部）

// import 接口名称 from 模块路径

import { fn1 } from './m1.js';

console.log(fn1);

// 通过 as 关键字 重命名 接口

import { fn1 as fn } from './m1.js';

console.log(fn);

fn();

import { word1 as w1, word2 as w2 } from './m2.js';
console.log(w1, w2);

// 可以通过 * 将模块中的 导出 一次性全部 导入
// import * as obj1 from '模块路径'，所有导出的变量 都放入 obj1这个对象中

import * as obj1 from './m3.js';
console.log(obj1);

console.log(obj1.a1);

obj1.fn();

// 重复执行 相同的import命令，不会重复导入，只会导入一次
// import * as obj1 from './m3.js';
// import * as obj1 from './m3.js';
// import * as obj1 from './m3.js';

// import命令导入的变量都是 只读的，不允许修改导入的变量

// 如果导入的是 对象，修改对象的属性值不会报错，但是不建议随便修改


// 导入 模块的默认导出
import aaa from './m2.js';

console.log(aaa);


import aaa1, { word1, word2 } from './m2.js';

console.log(aaa1, word1, word2);




// 总结：
// 1.当用 export default people，就用 import 变量 导入（不需要{}）
// 2.一个模块中只能有 一个 export default，可以有 多个 export
// 3.当 export name，就用 import {name}/import {name as name1}(需要{})
// 4.当 有一个 export default people，又有 多个 export name，export age，就用 import 变量名,{name,age}
// 5.当 有 多个 export，可以只用 * 一次性全部导入