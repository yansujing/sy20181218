

// 路由

// 路由这个概念首先是后端出现的

// 简单来说 后端路由 是和服务器进行交互的一种方式，通过不同的 路径 来 请求不同的资源（请求不同的页面实际上是路由的其中一种功能而已）


// 前端路由：为了实现单页应用（SPA），页面交互无刷新的，页面之间跳转也是无刷新的

// 前端路由功能的实现
// 1. url hash来实现，hash的变化不会导致浏览器向服务器发出请求
// 2. H5 history API

// 两种实现方式的对比：
// 基于Hash的路由实现，兼容性更好
// 而基于H5 History API的路由，路径更直观，没有 # 
// 此外，基于Hash的路由不需要对服务器做改动
// 基于H5 History API的路由需要对服务器做一些改造，需要对不同的路由进行相应的设置才行



const Home = {
    template: `<div>
                 <h1>Home</h1>
                 <route-switch href='/about'>About</route-switch>
                 <route-switch href='/contact'>Contact</route-switch>
               </div>`
};

const About = {
    template: `<div>About
                 <p>
                   <route-switch href='/contact'>切换</route-switch>
                 </p>
               </div>`
};

const Contact = {
    template: `<div>Contact</div>`
};

// 配置路由信息
const routes = {
    '/': Home,
    '/about': About,
    '/contact': Contact
};

// 路由切换组件
Vue.component('route-switch', {
    props: {
        href: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            link: ''
        }
    },
    created() {
        this.link = `${location.origin}${location.pathname}#${this.href}`;
    },
    template: `<a :href='link'>
                <slot></slot>
               </a>`
});

// render():渲染函数，在Vue实例初始化时就会调用，传了一个 createElement()方法过来
// 当组件 有 render函数时，它的 模板字符串就失效了

const vm = new Vue({
    el: '#app',
    data: {
        currentRoute: '/',
    },
    computed: {
        view() {
            return routes[this.currentRoute];
        }
    },
    render(h) {
        return h(this.view);
    }
});

// 页面刷新时，hash值置空
if (location.hash.slice(1)) {
    location.hash = '';
}

// 监听 hash值 的变化
window.addEventListener('hashchange', (e) => {
    console.log(location.hash);

    vm.currentRoute = location.hash.slice(1) || '/';
});





