

// （前端）组件：由 html、css、js封装而成的 项目 中 最小的 功能单元

// 组件化开发：讲一个页面（视图）以各种组件的形式组装起来，从而创建一个 组件树

// Vue组件：就是 Vue实例，它和 根组件唯一的区别就是 Vue组件实例 没有 el 配置选项

// Vue组件的使用：把它作为 自定义元素 来使用

// 创建 Vue组件
// 全局组件：Vue.component()方法来 创建全局组件，全局组件可以 在 任何Vue组件实例 的 模板中 使用
// 局部组件：使用 Vue实例 的 components选项 创建 局部组件，局部组件 只能在 当前 Vue组件实例 的 模板中 使用

// 1.全局组件
console.dir(Vue);

// Vue.component(组件名称：最好使用短横线/小驼峰方式来命名，Vue实例配置对象);

const obj = {
    count: 0
}

Vue.component('app-com1', {
    // 定义组件的模板，注意：只能有一个根元素
    template: `<div>
      <h1>{{count}}</h1>
      <button @click='add'>增加</button>
    </div>`,
    data() {
        return obj
    },
    methods: {
        add() {
            this.count++;
        }
    }
});


const appCom2 = {
    template: `<div>
      <h1>{{count}}</h1>
      <button @click='add'>增加</button>
    </div>`,
    // data选项必须是一个函数，并返回一个新对象（因为组件被复用一次就会有一个组件实例被创建，被复用的组件实例应该有自己的 data属性）
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count++;
        }
    },
    created() {
        console.log('appCom2');
    }
}

Vue.component('appCom2', appCom2);

const appCom3 = {
    template: `<div>
      appCom3
      <app-com2></app-com2>
    </div>`,
    created() {
        console.log('appCom3');
    }
}

Vue.component('appCom3', appCom3);


// 根组件
const vm = new Vue({
    el: '#app'
});


