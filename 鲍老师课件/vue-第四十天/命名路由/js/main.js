



const Login = {
    name: 'Login',
    template: `<div id='login'>
                 登录
                 <router-link to='/'>返回</router-link>
               </div>`
};

const NavBar = {
    name: 'NavBar',
    template: `<div id='nav'>
                 导航栏
                 <router-link to='/login' class='fr'>登录</router-link>
               </div>`
};
const SlideBar = {
    template: `<div id='slideBar' class='fl'>
                 <ul>
                   <li><router-link to='/'>菜单1</router-link></li>
                   <li><router-link :to='{name:"menu2"}'>菜单2</router-link></li>
                   <li><router-link :to='{name:"menu3"}'>菜单3</router-link></li>
                 </ul>
               </div>`
};
const Home = {
    name: 'Home',
    template: `<div id='home'>
                 <NavBar></NavBar>
                 <SlideBar></SlideBar>
                 <div id='content' class='fl'>
                   <router-view></router-view>
                 </div>
               </div>`,
    components: {
        NavBar,
        SlideBar
    }
}

const Menu1 = {
    name: 'Menu1',
    template: `<div id='menu1'>
                 菜单1
               </div>`
};

const Menu2 = {
    name: 'Menu2',
    template: `<div id='menu2'>
                 菜单2
               </div>`
};

const Menu3 = {
    name: 'Menu3',
    template: `<div id='menu3'>
                 菜单3
               </div>`
};

// 定义路由信息对象
const routes = [
    {
        path: '/login',
        // 通过 name属性来给 路由命名，就可以通过 name属性 来 导航路由
        // 通过 name属性 进行路由导航时，必须使用 对象形式
        name: 'login',
        component: Login
    },
    {
        path: '/',
        // 当 路由 匹配到 '/'时，会重定向到 '/home'
        redirect: '/home'
        // redirect: { name: 'home' }
    },
    {
        path: '/home',
        // 当某个路由 有 默认子路由时，就不需要设置 name属性
        // name: 'home',
        component: Home,
        children: [
            {
                path: '/',
                name: 'menu1',
                component: Menu1,
            },
            {
                path: 'menu2',
                name: 'menu2',
                component: Menu2,
            },
            {
                path: 'menu3',
                name: 'menu3',
                component: Menu3,
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
    // 将路由实例注入根组件
    router
});








