

// key特性
// 当某一层有很多相同的节点时,也就是列表节点时,需要给 每一个节点添加唯一的 key值 (key值最好是字符串或者数值)

// Vue为了能够高效的 渲染元素,会直接 复用 已有的元素而不是重新渲染，如果希望 Vue不复用这个元素，就需要给这个元素添加一个唯一的key值，不同的key
// Vue 就会认为 它们 是 不同的元素


// 列表项组件
const ListItem = {
    template: `<li>
                  <span class="span1">待办事项1</span>
                  <label>
                     <span class="unfinished">未完成</span> 
                     <input type="checkbox">
                  </label> 
                  <button>删除</button>  
                  <button>编辑</button>
                </li>`
}

// 列表组件
const ListContainer = {
    template: `<ul class='descul'>
                 <ListItem v-for='n of 10' :key='n'></ListItem>
               </ul>`,
    components: {
        ListItem
    }
}

// 创建 根组件
const vm = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: '1',
                title: '我是标题1'
            },
            {
                id: '2',
                title: '我是标题2'
            },
            {
                id: '3',
                title: '我是标题3'
            }
        ]
    },
    methods: {
        fn() {
            this.list.unshift({
                id: '4',
                title: '我是标题4'
            })
        }
    },
    components: {
        ListContainer
    }
});