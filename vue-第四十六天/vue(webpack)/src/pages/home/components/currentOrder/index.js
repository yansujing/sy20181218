
import Vuex from 'vuex';

export default {
  name: 'CurrentOrder',
  methods: {
    ...Vuex.mapMutations([
      'del',
      'decrease',
      'increase'
    ])
  },
  computed: {
    ...Vuex.mapState([
      'orderList'
    ])
  },
  template: `<div>
              <ul class='order-ul'>
                <li class='fl'>商品名称</li>
                <li class='fl'>数量</li>
                <li class='fl'>价格</li>
                <li class='fl'>操作</li>
              </ul>
              <TransitionCom :isGroup='true' name='slideLeft'>
              <ul :key='food.id' v-for='(food,index) of orderList' class='order-ul'>
                <li class='fl'>
                  <span>{{food.name}}</span>
                </li>
                <li class='fl'>
                  <span>{{food.count}}</span>
                </li>
                <li class='fl'>
                  <span>{{food.price}}</span>
                </li>
                <li class='fl'>
                  <span class='operation'>
                    <span @click='del(index)'>删除</span>
                    <span @click='decrease(index)'>-</span>
                    <span @click='increase(index)'>+</span>
                  </span>
                </li>
              </ul>
              </TransitionCom>
            </div>`
};