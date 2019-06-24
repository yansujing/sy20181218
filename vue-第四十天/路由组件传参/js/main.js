

// 路由组件传参

// 在组件中使用 $route 会使组件与 其对应的路由形成 高度耦合，从而使当前组件 只能在某些特定 路由路径下使用，限制组件的灵活性

// 通过 props 将组件与 路由解耦

// const Detail = {
//     props: [
//         'id',
//         'name'
//     ],
//     template: `<div>Detail{{this.id}}{{this.name}}</div>`
// }

// const Detail = {
//     props: [
//         'a',
//         'b'
//     ],
//     template: `<div>Detail{{this.a}}{{this.b}}</div>`
// }

const Detail = {
    props: ['query'],
    template: `<div>Detail{{this.query}}</div>`
}

const routes = [
    {
        path: '/detail/:id/:name',
        component: Detail,
        // props属性 布尔模式：会将 route.params设置为组件的 props属性
        // props: true,
        // props属性 对象模式：props属性的值 会被按原样设置组件的 props属性
        // props: {
        //     a: 123,
        //     b: 'Steel'
        // },
        // props属性 函数模式：函数返回某个值，函数接收 当前路由对象作为参数
        props: (route) => {
            console.log(route);
            return {
                query: route.query.id
            }
        }
    }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    el: '#app',
    router,
    components: {
        Detail
    }
});





