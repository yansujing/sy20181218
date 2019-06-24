

// 动态路由匹配
// 多个路由路径 匹配到 同一个组件

const Detail = {
    template: `<div>Detail</div>`,
    watch: {
        $route() {
            console.log(this.$route.params.id, this.$route.params.name, this.$route.query.bcd);
        }
    },
    created() {
        // alert(1);
        console.log(this.$router);
        console.log(this.$route);
        console.log(this.$route.params.id, this.$route.params.name, this.$route.query.abc);
    }
}

const routes = [
    {
        // 动态路由 参数 通过 : 表示，:后面设置参数名称
        // /detail/123,/detail/855,/detail/abc,都会 匹配到 Detail这个组件
        // 也可以设置 多个 路径参数
        path: '/detail/:id/:name',
        name: 'detail',
        component: Detail
    }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    el: '#app',
    router
});





