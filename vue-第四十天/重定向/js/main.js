

// 重定向

// 通过 redirect属性：属性值可以是 字符串/对象/函数


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
        // 目标路由对象（即将要跳转到的路由）对象会传递给redirect 函数
        redirect: (to) => {
            console.log(to);

            // return '/home';
            return { name: 'about' };
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        redirect: (to) => {
            console.log(to);

            // return '/home';
            return { name: 'about' };
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About
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





