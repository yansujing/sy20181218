

// 待办事项输入框组件
const AppInput = {
  model: {
    prop: 'backLog',
    event: 'input'
  },
  props: {
    backLog: ''
  },
  methods: {
    input(e) {
      console.log(e);
      this.$emit("input", e.target.value);
    }
  },
  template: `<div class='desc'>
               <input :value='backLog' @input='input' type='text' placeholder='请输入待办事项内容...' />  
             </div>`
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

// select组件
const AppSelect = {
  props: {
    selectList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      select: ''
    }
  },
  template: `<select v-model='select' class='select'>
               <option :value='item.id' v-for='item of selectList'>{{item.select}}</option>
             </select>`,
  watch: {
    select() {
      this.$emit('select-change', this.select);
    }
  },
  created() {
    this.select = this.selectList[0].id;
  }
};

// 完成情况组件
const FinishInfo = {
  props: {
    finishInfo: {
      type: Object,
      required: true
    }
  },
  template: `<p class='desc'>
                共<span class="count">{{finishInfo.total}}</span>条
                已完成：<span class="count">{{finishInfo.finish}}</span>条
                未完成：<span class="count">{{finishInfo.unfinish}}</span>条
               </p>`
};

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
      editValue: ''
    }
  },
  methods: {
    edit() {
      console.log('edit');
      this.editValue = this.getItem.title;
      this.$emit('edit-item', this.getItem);
    },
    cancelEdit() {
      console.log('cancelEdit');
      this.$emit('cancel-edit-item', this.getItem);
    },
    del() {
      console.log('del');
      this.$emit('del-item', this.getItem);
    },
    save() {
      this.$emit('save-item', {
        item: this.getItem,
        value: this.editValue
      });
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
    },
    showFilter: {
      type: Object,
      default() {
        return {
          partShow: true,
          allShow: true
        }
      }
    }
  },
  methods: {
    del(item) {
      this.$emit('del-item', item);
    },
    edit(item) {
      this.$emit('edit-item', item);
    },
    cancelEdit(item) {
      this.$emit('cancel-edit-item', item);
    },
    save(item) {
      this.$emit('save-item', item);
    }
  },
  template: `<div>
               <ul v-if='getList.length' class='descul'>
                 <ListItem :getItem='item' @del-item='del' @edit-item='edit' @cancel-edit-item='cancelEdit' @save-item='save' :key='item.id' v-for='item of getList' v-show='showFilter.allShow || (showFilter.partShow?item.isFinish:!item.isFinish)'></ListItem>
               </ul>
               <p v-else>没有数据！！！</p>
             </div>`,
  components: {
    ListItem
  }
}

// 创建 根组件
const vm = new Vue({
  el: '#app',
  data: {
    selectList: [
      {
        id: '1',
        select: '全部'
      },
      {
        id: '2',
        select: '已完成'
      },
      {
        id: '3',
        select: '未完成'
      }
    ],
    list: [
      {
        title: '待办事项1',
        isFinish: false
      },
      {
        title: '待办事项2',
        isFinish: false
      },
      {
        title: '待办事项3',
        isFinish: true
      }
    ],
    addBackLog: '',
    show: {
      // 部分显示
      partShow: true,
      // 是否全部显示
      allShow: true
    }
  },
  computed: {
    finishInfo() {
      const count = {
        total: this.list.length,
        finish: 0,
        unfinish: 0
      };
      this.list.map(item => {
        if (item.isFinish) {
          count.finish++;
        } else {
          count.unfinish++;
        }
      })
      return count;
    }
  },
  methods: {
    add() {
      if (this.addBackLog) {
        this.list.push({
          title: this.addBackLog,
          isFinish: false,
          isEdit: false
        });
        this.addBackLog = '';
      }
    },
    del(item) {
      console.log(item);
      const index = this.list.indexOf(item);
      this.list.splice(index, 1);
    },
    edit(item) {
      console.log(item);
      this.list.map(item => {
        item.isEdit = false;
      });
      const index = this.list.indexOf(item);
      this.list.splice(index, 1, {
        title: item.title,
        isFinish: item.isFinish,
        isEdit: true
      });
    },
    cancelEdit(item) {
      console.log(item);
      const index = this.list.indexOf(item);
      this.list.splice(index, 1, {
        title: item.title,
        isFinish: item.isFinish,
        isEdit: false
      });
    },
    save(obj) {
      const index = this.list.indexOf(obj.item);
      this.list.splice(index, 1, {
        title: obj.value,
        isFinish: obj.item.isFinish,
        isEdit: false
      });
    },
    select(id) {
      console.log(id);
      if (id === '1') {
        this.show.allShow = true;
      }
      if (id === '2') {
        this.show.allShow = false;
        this.show.partShow = true;
      }
      if (id === '3') {
        this.show.allShow = false;
        this.show.partShow = false;
      }
    }
  },
  components: {
    AppInput,
    AppSelect,
    FinishInfo,
    ListContainer
  },
  created() {
    this.list.map(item => {
      item.isEdit = false;
    });
  }
});