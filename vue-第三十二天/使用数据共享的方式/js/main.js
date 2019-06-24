
// 共享数据(包含 共享的数据 和对 数据的操作)
const data = {
    list: [
        {
            title: '待办事项1',
            isFinish: false,
            isEdit: false
        },
        {
            title: '待办事项2',
            isFinish: false,
            isEdit: false
        },
        {
            title: '待办事项3',
            isFinish: true,
            isEdit: false
        }
    ],
    edit(item) {
        this.list.map(item => {
            item.isEdit = false;
        });
        const index = this.list.indexOf(item);
        this.list[index].isEdit = true;
    },
    cancelEdit(item) {
        const index = this.list.indexOf(item);
        this.list[index].isEdit = false;
    },
    del(item) {
        const index = this.list.indexOf(item);
        this.list.splice(index, 1);
    },
    save(item, newValue) {
        const index = this.list.indexOf(item);
        this.list[index].title = newValue;
        this.list[index].isEdit = false;
    }
};


// 按钮组件
const ButtonCom = {
    props: {
        getText: {
            type: String,
            default: '按钮'
        }
    },
    methods: {
        trigger() {
            this.$emit('trigger-click');
        }
    },
    template: `<button @click='trigger' class='btn'>{{getText}}</button>`
};
Vue.component('ButtonCom', ButtonCom);


// 列表项组件
const ListItem = {
    props: {
        getItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editValue: '',
            data
        }
    },
    methods: {
        edit() {
            this.editValue = this.getItem.title;
            this.data.edit(this.getItem);
        },
        cancelEdit() {
            this.data.cancelEdit(this.getItem);
        },
        del() {
            this.data.del(this.getItem);
        },
        save() {
            this.data.save(this.getItem, this.editValue);
        }
    },
    computed: {
        getClass() {
            return {
                finished: this.getItem.isFinish,
                unfinished: !this.getItem.isFinish
            }
        }
    },
    template: `<li>
                    <span v-if='!getItem.isEdit' class="span1">{{getItem.title}}</span>
                    <input v-else v-model='editValue' type="text" class='edit' />
                    <label>
                       <span :class="getClass">{{getItem.isFinish?'已完成':'未完成'}}</span> 
                       <input v-model='getItem.isFinish' type="checkbox">
                    </label> 
                    <ButtonCom getText='删除' @trigger-click='del'></ButtonCom>
                    <ButtonCom v-if='!getItem.isEdit' getText='编辑' @trigger-click='edit'></ButtonCom>
                    <p v-else>
                      <ButtonCom getText='保存' @trigger-click='save'></ButtonCom>
                      <ButtonCom getText='取消编辑' @trigger-click='cancelEdit'></ButtonCom>
                    </p>
               </li>`
}

// 列表组件
const ListContainer = {
    props: {
        getList: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    template: `<div>
                 <ul v-if='getList.length' class='descul'>
                   <ListItem :getItem='item' :key='item.id' v-for='item of getList'></ListItem>
                 </ul>
                 <p v-else>没有数据！！！</p>
               </div>`,
    components: {
        ListItem
    }
}

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        data
    },
    components: {
        ListContainer
    }
});


