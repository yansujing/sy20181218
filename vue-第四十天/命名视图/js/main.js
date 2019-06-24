

// 命名视图

// 如果想要同级展示 多个 视图，就要使用 命名视图


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
               </div>`
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
        components: {
            default: Home,
            about: About,
            contact: Contact
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





