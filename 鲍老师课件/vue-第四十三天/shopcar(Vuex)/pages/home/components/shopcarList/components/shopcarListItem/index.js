export default {
  name:'ShopcarListItem',
  props: {
    goodInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...Vuex.mapMutations([
      'del',
      'decrease',
      'increase'
    ])
  },
  template: `
  <tr class='shopcar-info-item'>
    <td>
      <input type='checkbox' v-model='goodInfo.checked' />
    </td>
    <td>{{goodInfo.name}}</td>
    <td>{{goodInfo.price}}</td>
    <td class='num'>
      <button @click='decrease(goodInfo)'>-</button>
      <input v-model='goodInfo.count' type="number" />
      <button @click='increase(goodInfo)'>+</button>
    </td>
    <td>
      <button @click='del(goodInfo)' class='del'>删除</button>
    </td>
  </tr>
  `,
};