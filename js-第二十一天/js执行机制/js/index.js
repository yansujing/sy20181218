

// js执行机制

setTimeout(() => {
    console.log(1);
}, 0);

new Promise((resolve, reject) => {
    console.log(2);

    for (let i = 0; i < 100000; i++) {
        i === 99999 && resolve();
    }

    console.log(3);
}).then(() => {
    console.log(4);
});

console.log(5);



// js是单线程语言，就是说同一时间只能执行一个任务，下个任务必须等到上个任务执行完

// js中有 宏任务 和 微任务，微任务包含在宏任务中

// 进入 js 就会产生 一个 宏任务，遇到 setTimeout和setInterval 会产生一个新的 宏任务，多个宏任务之间 依次执行（一个宏任务执行完，才会执行下个宏任务）

// 在执行宏任务的过程中，如果遇到 Promise 就会在当前 宏任务 中 产生一个微任务
// 当 宏任务 和 它里面的所有 微任务 都执行完，这个 宏任务 才真正执行完成