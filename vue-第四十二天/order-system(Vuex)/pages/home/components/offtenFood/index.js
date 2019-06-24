
import SingleFood from './components/singleFood/index.js';

export default {
  name: 'OfftenFood',
  props: {
    foodList: {
      type: Array,
      required: true
    }
  },
  template: `<div>
              <div v-for='item of foodList' class='fl classify'>
                <h1>{{item.classify}}</h1>
                <ul>
                  <SingleFood :key='food.id' v-for='food of item.productList' :foodInfo='food'></SingleFood>
                </ul>
              </div>
            </div>`,
  components: {
    SingleFood
  }
};
