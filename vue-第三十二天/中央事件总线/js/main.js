

// 中央事件总线

// $emit:在当前 Vue实例上 发送一个自定义事件
// $on(自定义事件名称,回调函数):在当前 Vue实例上 接收一个自定义事件

// 创建一个 空的 Vue实例 作为 中央事件总线（事件 bus）

const bus = new Vue();


// const AppCom1 = {
//     methods: {
//         getData(data) {
//             console.log(data);
//             this.$emit('send-data', data);
//         }
//     },
//     template: `<div>
//                  AppCom1
//                  <ButtonCom @send-data='getData'></ButtonCom>
//                </div>`
// };

// const ButtonCom = {
//     data() {
//         return {
//             data: '我是按钮组件的数据'
//         }
//     },
//     methods: {
//         send() {
//             this.$emit('send-data', this.data);
//         }
//     },
//     template: `<button @click='send'>发送</button>`
// };
// Vue.component('ButtonCom', ButtonCom);

// // 根组件
// const vm = new Vue({
//     el: '#app',
//     methods: {
//         getData(data) {
//             console.log(data);
//         }
//     },
//     components: {
//         AppCom1
//     }
// });


const AppCom1 = {
    template: `<div>
                 AppCom1
                 <ButtonCom></ButtonCom>
               </div>`,
    created() {
        bus.$on('send-data', data => {
            console.log(data);
        });
    }
};

const ButtonCom = {
    data() {
        return {
            data: '我是按钮组件的数据'
        }
    },
    methods: {
        send() {
            bus.$emit('send-data', this.data);
        }
    },
    template: `<button @click='send'>发送</button>`
};
Vue.component('ButtonCom', ButtonCom);

// 根组件
const vm = new Vue({
    el: '#app',
    methods: {
        getData(data) {
            console.log(data);
        }
    },
    components: {
        AppCom1
    },
    created() {
        bus.$on('send-data', data => {
            console.log(data);
        });
    }
});

