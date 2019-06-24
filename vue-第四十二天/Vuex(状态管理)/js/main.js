

// Vuex(状态管理)

// Vuex：是基于 Vue的 状态管理（全局数据共享） 插件，用于 统一管理整个应用的 所有 组件的状态(数据)，把 组件间的 共享状态 提取出来进行统一管理

// Vuex插件出现的原因
// 1.多个组件可能依赖于 同一个状态
// 2.多个组件可能需要 更新同一个状态


// Vuex插件的核心 是 store（仓库），仓库中 包含 整个应用的 所有共享状态


// 使用 Vuex插件
// 1.创建 store 实例，通过 Vuex.Store()构造函数

const store = new Vuex.Store({
    // 通过 state 选项来 设置所有 共享状态
    // state是 响应式的（只要状态发生变化，那么所有依赖这个状态的组件都会得到立即更新）
    state: {
        count: 0
    },

    // 通过 mutation（突变）选项来 设置 对仓库中的状态 进行修改的 方法(事件注册)

    // 通过 仓库实例上的 commit()方法 触发一个 mutation来 修改仓库中的某个状态（也是 修改仓库中某个状态的 唯一方法）

    // 修改仓库中的状态的 唯一方式 就是 提交某个 mutation
    mutations: {
        // increment：事件类型，回调函数，接收仓库中的 state 作为参数
        increment(state) {
            console.log(state);
            state.count++;
        }
    }
});

console.log(store);


const AppCom1 = {
    template: `<div>
                 <h1>{{$store.state.count}}</h1>
                 <button @click='increment'>增加</button>
               </div>`,
    methods: {
        increment() {
            this.$store.commit('increment');
        }
    },
    created() {
        console.log(this.$store.state.count);

        // 不能直接修改 仓库中的状态
        // this.$store.state.count = 11;
    }
};

const AppCom2 = {
    template: `<div>
                 <h1>{{getCount}}</h1>
                 <button @click='increment'>增加</button>
               </div>`,
    computed: {
        // ...Vuex.mapState([
        //     'count'
        // ]),
        ...Vuex.mapState({
            getCount: 'count'
        }),
    },
    methods: {
        increment() {
            this.$store.commit('increment');
        }
    },
    created() {
        console.log(this.$store.state.count);
    }
};

const vm = new Vue({
    el: '#app',
    // 2.通过根组件实例的 store 配置选项将 仓库实例注入到 根组件
    // 那么 根组件下的 所有子组件 都能够 访问到 仓库实例，通过 组件实例的 $store属性访问 仓库实例
    store,
    components: {
        AppCom1,
        AppCom2
    }
});