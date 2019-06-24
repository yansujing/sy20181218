
import { components } from './components/index.js';

export default {
  data() {
    return {
      orderList: [],
      list: []
    }
  },
  name: 'Home',
  template: `<transition-group name='move' appear>
               <bar-com class='order fl' bar-title='订单栏' key='order'>
                 <el-tabs>
                   <el-tab-pane label='当前订单' name='first'>
                     <current-order></current-order>
                   </el-tab-pane>
                   <el-tab-pane label='挂单中' name='second'>3421321</el-tab-pane>
                   <el-tab-pane label='已付款' name='third'>432143</el-tab-pane>
                   <el-tab-pane label='取消的订单' name='fourth'>43214321</el-tab-pane>
                </el-tabs>
               </bar-com>
               <bar-com class="product fl" bar-title='产品栏' key='product'>
                 <el-tabs>
                   <el-tab-pane label='常点食品' name='first'>
                     <offten-food :food-list='list'></offten-food>
                   </el-tab-pane>
                   <el-tab-pane label='主菜单' name='second'>3421321</el-tab-pane>
                 </el-tabs>
               </bar-com>
             </transition-group>`,
  components,
  created() {
    this.$ajax({
      method: 'GET',
      url: '/order-system(Vuex)/assets/data/list.json',
      async: true
    }).then(responseData => {
      this.list = JSON.parse(responseData);
    });
  }
};
