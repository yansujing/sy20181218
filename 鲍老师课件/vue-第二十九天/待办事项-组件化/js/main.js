

// 待办事项输入框组件
const AppInput = {
  template: `<div class='desc'>
                 <input type='text' placeholder='请输入待办事项内容...' />  
               </div>`
};

// 按钮组件
const ButtonCom = {
  template: `<p class='desc'>
                 <button>按钮</button> 
               </p>`
};
Vue.component('ButtonCom', ButtonCom);

// select组件
const AppSelect = {
  template: `<p class='desc'>
                 <select>
                   <option>全部</option>
                   <option>已完成</option>
                   <option>未完成</option>
                 </select> 
               </p>`
};

// 完成情况组件
const FinishInfo = {
  template: `<p class='desc'>
                共<span class="count">3</span>条
                已完成：<span class="count">1</span>条
                未完成：<span class="count">2</span>条
               </p>`
};

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
                 <ListItem :key='n' v-for='n of 10'></ListItem>
               </ul>`,
  components: {
    ListItem
  }
}

// 创建 根组件
const vm = new Vue({
  el: '#app',
  components: {
    AppInput,
    AppSelect,
    FinishInfo,
    ListContainer
  }
});