



// 导航守卫：路由导航的 钩子函数，使开发者能够在 路由导航的 过程中 加入自己的代码

// 导航守卫的分类
// 1.全局守卫
// 2.路由守卫
// 3.组件守卫

// 1.全局守卫
// beforeEach：前置守卫，在路由导航之前被调用
// afterEach：后置守卫，在路由导航完成之后被调用
// 全局守卫 定义在 全局的 router 对象上

// 2.路由守卫
// beforeEnter：进入某个路由之前被调用

// 3.组件守卫
// 1.beforeRouteEnter：进入当前组件之前被调用，不能访问组件实例
// 2.beforeRouteUpdate：当前组件对应的 路由发生变化并且 当前组件被复用时 调用，能访问组件实例
// 3.beforeRouteLeave：离开当前组件时 被调用，能访问组件实例

// 导航守卫中的 回调函数 被调用时，接收 即将进入的路由对象和正要离开的路由对象，还有一个 next函数
// next函数: 使当前守卫的状态 变为 resolve，具体效果取决于它的 参数
// 参数：
// 1.没有参数：继续执行下一个钩子函数
// 2.false：中断当前导航
// 3.路由位置信息：跳转到其它路由，中断当前导航，开始一个新导航
// 路由导航守卫是 异步执行的，当守卫 没有 resolve之前 路由会一直处于等待中
// 路由导航后面的钩子函数如果想要被调用，那么当前钩子函数的 前一个钩子函数的 状态必须是 resolve


// 守卫调用顺序
// 1.全局 beforeEach
// 2.路由相关的守卫
// 3.组件相关的守卫
// 4.全局 afterEach



// 是否已经登录
let isLogin = false;

const Login = {
    name: 'Login',
    template: `<div id='login'>
                 登录
                 <router-link to='/'>返回</router-link>
                 <button @click='login'>登录</button>
               </div>`,
    methods: {
        login() {
            isLogin = true;
            this.$router.replace({ name: this.$route.query.redirect });
        }
    },
    beforeRouteEnter(to, from, next) {
        alert('beforeRouteEnter');
        console.log(this);

        // 给 next方法 传一个 回调函数(回调函数会在导航被确认之后调用) 来 实现访问 当前组件实例
        next((vm) => {
            console.log(vm);
        });
    },
    beforeRouteUpdate(to, from, next) {
        alert('beforeRouteUpdate');

        next();
    },
    beforeRouteLeave(to, from, next) {
        alert('beforeRouteLeave');
        console.log(this);
        next();
    }
};

const NavBar = {
    name: 'NavBar',
    template: `<div id='nav'>
                 导航栏
                 <router-link to='/login'>登录</router-link>
               </div>`
};
const SlideBar = {
    name: 'SlideBar',
    template: `<div id='slideBar' class='fl'>
                 <ul>
                   <li><router-link to='/home'>菜单1</router-link></li>
                   <li><router-link to='/home/menu2/123'>菜单2</router-link></li>
                   <li><router-link to='/home/menu3'>菜单3</router-link></li>
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
               </div>`,
    beforeRouteUpdate(to, from, next) {
        alert('beforeRouteUpdate');

        next();
    }
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
        name: 'login',
        component: Login,
        beforeEnter: (to, from, next) => {
            alert('beforeEnter');
            console.log(to, from);

            next();
        }
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
                component: Menu1,
                beforeEnter: (to, from, next) => {
                    alert('beforeEnter');
                    console.log(to, from);

                    next();
                }
            },
            {
                path: 'menu2/:id',
                name: 'menu2',
                component: Menu2,
                meta: {
                    // requireLogin: true
                },
                beforeEnter: (to, from, next) => {
                    alert('beforeEnter');
                    console.log(to, from);

                    next();
                }
            },
            {
                path: 'menu3',
                name: 'menu3',
                component: Menu3,
                meta: {
                    requireLogin: true
                }
            }
        ]
    }
];

// 创建路由实例
const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {


    alert('beforeEach');

    // 处理逻辑
    console.log(to, from);

    if (to.meta.requireLogin && !isLogin) {
        next({ name: 'login', query: { redirect: to.name } });
    } else {
        next();
    }

});

router.afterEach((to, from) => {

    // 处理逻辑
    console.log(to, from);
    alert('afterEach');

});

const vm = new Vue({
    el: '#app',
    // 将路由实例注入根组件
    router
});