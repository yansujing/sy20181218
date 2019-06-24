

// 路由元信息

// 给当前 路由 设置一些必要的数据的
// 通过 路由对象的 meta属性


const About = {
    name: 'About',
    template: `<div>
                 <h1>About</h1>
               </div>`
};

const Contact = {
    name: 'Contact',
    template: `<div>
                 <h1>Contact</h1>
               </div>`
};

const Home = {
    name: 'Home',
    template: `<div>
                 <h1>Home</h1>
               </div>`,
    created() {
        console.log(this.$route);
    }
};


// 定义路由信息对象
const routes = [
    {
        path: '/',
        redirect: { name: 'home' }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            name: 'steel',
            age: 25
        }
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





