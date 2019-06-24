
export default {
  name: 'SingleFood',
  props: {
    foodInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...Vuex.mapMutations([
      'add'
    ])
  },
  template: `<li>
              <img v-bitmap='foodInfo' />
              <p>
                <span>{{foodInfo.name}}</span>
                <span>{{foodInfo.price}}（元）</span>
              </p>
              <button @click='add(foodInfo)'>点击添加</button>
            </li>`
};