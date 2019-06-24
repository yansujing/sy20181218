

// <keep-alive>组件
// 作用:缓存 不活动的 组件

// 包裹 动态组件，会缓存 不活动的 组件，保留组件的所有状态 它是一个抽象组件

// 同一时间只能有一个组件被渲染

// 有 2 个 props属性：include，exclude:值可以是 字符串或者正则



const AppCom1 = {
    template: `<h1>AppCom1</h1>`,
    created() {
        alert('AppCom1');
    }
}
const AppCom2 = {
    data() {
        return {
            title: '我是标题1'
        }
    },
    methods: {
        fn() {
            this.title = '我是标题2';
        }
    },
    template: `<div>
                 <h1>{{title}}</h1>
                 <button @click='fn'>改变</button>
               </div>  
               `,
    created() {
        alert('AppCom2');
    }
}
const AppCom3 = {
    template: `<h1>AppCom3</h1>`,
    created() {
        alert('AppCom3');
    }
}

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        comName: 'AppCom1',
        flag: true
    },
    methods: {
        fn(n) {
            switch (n) {
                case 1:
                    this.comName = 'AppCom1';
                    break;
                case 2:
                    this.comName = 'AppCom2';
                    break;
                case 3:
                    this.comName = 'AppCom3';
                    break;
            }
        },
        fn2() {
            this.flag = !this.flag;
        }
    },
    components: {
        AppCom1,
        AppCom2,
        AppCom3
    }
});


