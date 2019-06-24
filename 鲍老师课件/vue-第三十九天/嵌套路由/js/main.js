


const About = {
    template: `<div>About</div>`
};

const Contact = {
    template: `<div>Contact</div>`
};

const Home = {
    template: `<div>
                 Home
                 <router-view></router-view>
               </div>`
};

const Home1 = {
    template: `<div>Home1</div>`
};
const Home2 = {
    template: `<div>Home2</div>`
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
        path: '/',
        component: Home,
        // children选项来配置 当前路由下的 子路由信息
        // 子路由 匹配到的 组件 渲染在 当前路由的 父级路由匹配到的组件 模板中 <router-view>组件的位置
        children: [
            // {
            //     path: 'home1',
            //     component: Home1
            // },
            {
                path: '/',
                component: Home1
            },
            {
                path: 'home2',
                component: Home2
            }
        ]
    }
];

// 创建路由实例
const router = new VueRouter({
    routes
});

const vm = new Vue({
    el: '#app',
    // 将路由实例注入到根组件
    router
});





