

import { bus } from '../../../bus.js';

import { bitmap } from '../../../directives/bitmap.js'

export default {
  props: {
    foodInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    add() {
      bus.$emit('food-add', this.foodInfo);
    }
  },
  directives: {
    bitmap
  },
  template: `<li>
              <img v-bitmap='foodInfo' />
              <p>
                <span>{{foodInfo.name}}</span>
                <span>{{foodInfo.price}}（元）</span>
              </p>
              <button @click='add'>点击添加</button>
            </li>`
};