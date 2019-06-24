

// Vuex(getter)

// 仓库 状态的 计算属性，getter的返回值会被缓存，只有当它依赖的 状态 发生变化 getter才会重新计算

const store = new Vuex.Store({
    state: {
        list: [
            {
                id: '1',
                title: '标题1',
                done: false
            },
            {
                id: '2',
                title: '标题2',
                done: true
            },
            {
                id: '3',
                title: '标题3',
                done: true
            }
        ]
    },
    getters: {
        // getters get函数接收 state 作为参数
        done: state => {
            console.log(state);
            return state.list.filter(item => item.done);
        },
        // 可以 通过 使 getter 返回一个函数 来 实现给 getter 传参
        getItemById: state => id => state.list.filter(item => item.id === id)
    },
    mutations: {
        del(state, obj) {
            state.list.splice(obj.index, 1);
        }
    }
});

console.log(store);


const AppCom1 = {
    computed: {
        // ...Vuex.mapGetters([
        //     'done',
        //     'getItemById'
        // ]),
        ...Vuex.mapGetters({
            getDone: 'done',
            getById: 'getItemById'
        })
    },
    methods: {
        ...Vuex.mapMutations({
            remove: 'del'
        }),
        del() {
            this.remove({
                index: 1
            });
        }
    },
    template: `<div>
                 <h1>AppCom1</h1>
                 <p>{{this.getById('1')}}</p>
                 <p>{{this.getDone}}</p>
                 <p>{{this.getDone}}</p>
                 <p>{{this.getDone}}</p>
                 <button @click='del'>删除</button>
               </div>`
};

const AppCom2 = {
    template: `<div>
                 <h1>AppCom2</h1>
                 <p>{{$store.getters.done}}</p>
               </div>`
};

const routes = [
    {
        path: '/',
        redirect: '/appcom1'
    },
    {
        path: '/appcom1',
        name: 'appcom1',
        component: AppCom1
    },
    {
        path: '/appcom2',
        name: 'appcom2',
        component: AppCom2
    }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    el: '#app',
    router,
    store
});