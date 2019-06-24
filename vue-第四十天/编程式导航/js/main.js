


// 编程式导航

// 不仅可以使用 router-link组件进行路由导航，也可以使用 路由对象上的某些方法进行导航

// 通过 $router 对象上的 某些方法进行导航
// $router.push(字符串/对象):导航到 相关的路由，并且会向 history中 添加一条记录
// $router.replace(字符串/对象):导航到 相关的路由，不会向 history中 添加一条记录，而是替换掉当前的 history中的记录
// $router.go(整数):导航到 相关的路由，根据 参数 导航到相关 索引的历史记录

// router-link组件内部是 使用了 $router.push方法

const About = {
    name:'About',
    template: `<div>
                 <h1>About</h1>
               </div>`
};

const Contact = {
    name:'Contact',
    template: `<div>
                 <h1>Contact</h1>
               </div>`
};

const Home = {
    name:'Home',
    template: `<div>
                 <h1>Home</h1>
                 <router-view></router-view>
               </div>`
};

const Home1 = {
    name:'Home1',
    template: `<div>Home1</div>`
};
const Home2 = {
    name:'Home2',
    template: `<div>Home2</div>`
};

// 定义路由信息对象
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/',
                name:'home1',
                component: Home1
            },
            {
                path: 'home2',
                name:'Home2',
                component: Home2
            }
        ]
    },
    {
        path: '/about',
        name:'about',
        component: About
    },
    {
        path: '/contact',
        name:'contact',
        component: Contact
    }
];

// 创建路由实例
const router = new VueRouter({
    routes
});

const vm = new Vue({
    el: '#app',
    methods:{
        fn(){
            console.log(this.$router);
            // this.$router.push('/contact');
            // this.$router.push({path:'/contact'});

            // this.$router.replace({name:'contact'});

            this.$router.go(-1);
            
        }
    },
    // 将路由实例注入到根组件
    router
});





