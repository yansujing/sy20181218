

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        // mutation必须是同步函数：只要mutation被触发，就会立即改变一个状态
        increment(state, obj) {
            console.log(obj);

            state.count += obj.num;
            // setTimeout(() => {
            //     state.count += obj.num;
            // }, 2000);
        },
        decrement(state) {
            state.count--;
        }
    }
});


// 在组件中提交 mutation可以 通过 mapMutation辅助函数进行简写
// 将 组件中的 methods 映射为 store.commit来调用
// 将多个mutation映射为多个方法，之后就可以调用某个方法来 提交某个mutation
console.log(Vuex.mapMutations([
    'increment',
    'decrement'
]));


const AppCom1 = {
    template: `<div>
                 <h1>{{$store.state.count}}</h1>
                 <button @click='increment1'>增加</button>
               </div>`,
    methods: {
        // ...Vuex.mapMutations([
        //     'increment'
        // ]),
        ...Vuex.mapMutations({
            add: 'increment'
        }),
        // this.add() ===> this.$store.commit('increment')
        // this.increment() ===> this.$store.commit('increment')
        increment1() {
            // 可以向 commit方法 传入额外参数，名叫 载荷
            // 载荷最好是 对象
            // this.$store.commit('increment', {
            //     num: 10
            // });
            this.add({
                num: 10
            });
        }
    }
};

const AppCom2 = {
    template: `<div>
                 <h1>{{$store.state.count}}</h1>
                 <button @click='decrement1'>减少</button>
               </div>`,
    methods: {
        ...Vuex.mapMutations([
            'decrement'
        ]),
        decrement1() {
            this.decrement();
        }
    }
};

const vm = new Vue({
    el: '#app',
    store,
    components: {
        AppCom1,
        AppCom2
    }
});