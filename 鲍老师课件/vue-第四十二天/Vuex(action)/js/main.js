
// action
// 1.action 提交的是 mutation
// 2.action 可以包含异步操作

// 通过 仓库实例上的 dispatch()方法 分发 action，从而触发 回调函数

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, obj) {
            console.log(obj);
            state.count += obj.num;
        },
        decrement(state) {
            state.count--;
        }
    },
    actions: {
        increment({ commit }) {
            // console.log(context);

            setTimeout(() => {
                commit('increment', {
                    num: 15
                });
            }, 1000);
        }
    }
});

const AppCom1 = {
    template: `<div>
                 <h1>{{$store.state.count}}</h1>
                 <button @click='increment1'>增加</button>
               </div>`,
    methods: {
        // ...Vuex.mapActions([
        //     'increment'
        // ]),
        ...Vuex.mapActions({
            add: 'increment'
        }),
        increment1() {
            this.add();
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