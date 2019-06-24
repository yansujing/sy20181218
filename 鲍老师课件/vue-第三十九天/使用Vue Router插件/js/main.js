


// 使用 Vue Router插件 创建 单页应用（SPA）

const About = {
    template: `<div>About</div>`
};

const Contact = {
    template: `<div>Contact</div>`
};

const Home = {
    template: `<div>Home</div>`
};

// 定义路由信息对象
const routes = [
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/home',
        component: Home
    }
];

// 通过 路由信息对象 和 VueRouter构造函数 创建 路由实例
const router = new VueRouter({
    routes
});


// 将路由实例 注入到 根组件（通过根组件实例的 router 配置选项），从而使 根组件下的所有 子组件都有 路由功能，在所有子组件实例中都可以
// 访问 路由（1.通过 $router 访问路由对象 2.通过 $route 访问当前路由）

const vm = new Vue({
    el: '#app',
    // router配置选项
    router
});





