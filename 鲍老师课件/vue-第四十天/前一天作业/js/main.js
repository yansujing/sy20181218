



const Login = {
    template: `<div id='login'>
                 登录
                 <router-link to='/'>返回</router-link>
                 <button @click='login'>登录</button>
               </div>`,
    methods: {
        login() {
            this.$router.replace({ name: this.$route.query.redirect });
        }
    },
    created() {
        console.log(this.$route);
    }
};

const NavBar = {
    template: `<div id='nav'>
                 导航栏
                 <router-link to='/login'>登录</router-link>
               </div>`
};
const SlideBar = {
    template: `<div id='slideBar' class='fl'>
                 <ul>
                   <li><router-link to='/home'>菜单1</router-link></li>
                   <li><router-link to='/home/menu2'>菜单2</router-link></li>
                   <li><router-link to='/home/menu3'>菜单3</router-link></li>
                 </ul>
               </div>`
};
const Home = {
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
    template: `<div id='menu1'>
                 菜单1
               </div>`
};

const Menu2 = {
    template: `<div id='menu2'>
                 菜单2
               </div>`
};

const Menu3 = {
    template: `<div id='menu3'>
                 菜单3
               </div>`
};

// 定义路由信息对象
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/',
                name: 'menu1',
                component: Menu1
            },
            {
                path: 'menu2',
                name: 'menu2',
                component: Menu2,
                redirect: to => {
                    console.log(to);

                    return { name: 'login', query: { redirect: to.name } };
                }
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








