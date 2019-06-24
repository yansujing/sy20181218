


// Vue过滤器

// 过滤器是 一种 文本格式化的方式，用于对文本内容进行格式化

// 过滤器本质上就是一个函数

// 全局过滤器/局部过滤器

// 全局过滤器：Vue.filter('过滤器名称'(小驼峰),处理函数)
// 局部过滤器：组件实例的 filters 配置选项

// 过滤器的使用
// 以 |（管道操作符）来使用 过滤器：数据 | 过滤器名称

// 过滤器的使用范围
// 1.可以在插值语法中使用 {{数据 | 过滤器名称}}
// 2.可以在 v-bind中使用  v-bind:属性='数据 | 过滤器名称'

// 过滤器可以串联使用


// Vue.filter('nameFormat', (value, arg1, arg2) => {
//     console.log(value);
//     console.log(arg1, arg2);

//     return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
// });

function nameFormat(value, arg1, arg2) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

function nameFormat1(value, arg1, arg2) {
    // value值上一个过滤的返回结果
    console.log(value);
    console.log(arg1, arg2);

    return `123`;
}

function urlFormat(value) {
    return `https://${value}`;
}


const vm = new Vue({
    el: '#app',
    data: {
        name: 'steel bao',
        url: 'baidu.com'
    },
    filters: {
        nameFormat,
        nameFormat1,
        urlFormat
    }
});

