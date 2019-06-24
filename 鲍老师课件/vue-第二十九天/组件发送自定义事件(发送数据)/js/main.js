

// 组件发送自定义事件(发送数据)

// 组件发送数据给 父组件：通过自定义事件的方式

// 自定义事件：包括 发送事件 接收事件

// 子组件 发送事件 ，父组件 接收事件

// 发送事件：通过 组件实例的 $emit()方法来发送一个自定义事件，参数1：自定义事件名称，参数2：需要传递给父组件的数据（可以是任何数据类型）

// 父组件接收 子组件发送的 自定义事件：通过在 组件的 自定义元素上 绑定 子组件发送的自定义事件

const AppSelect = {
  props: {
    getList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      select: ''
    }
  },
  template: `<p class='desc'>
                   <select v-model='select'>
                     <option :value='item.id' v-for='item of getList'>{{item.text}}</option>
                   </select> 
                 </p>`,
  created() {
    this.select = this.getList[0].id;
  },
  watch: {
    select() {
      console.log(this.select);
      // 自定义事件名称使用 短横线命名
      this.$emit('send-select', this.select);
    }
  }
};

// 根组件
const vm = new Vue({
  el: '#app',
  data: {
    selectList: [
      {
        id: '1',
        text: '全部'
      },
      {
        id: '2',
        text: '已完成'
      },
      {
        id: '3',
        text: '未完成'
      }
    ]
  },
  methods: {
    fn(value, data) {
      console.log(value, data);
    },
    fn1(e) {
      console.log(e);
    }
  },
  components: {
    AppSelect
  }
});

console.log(vm);

