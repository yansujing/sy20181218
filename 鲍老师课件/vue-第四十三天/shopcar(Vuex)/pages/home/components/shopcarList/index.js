
import ShopcarListItem from './components/shopcarListItem/index.js';

export default {
    name: 'ShopcarList',
    data() {
        return {
            allChecked: false
        }
    },
    computed: {
        ...Vuex.mapState([
            'list'
        ]),
        ...Vuex.mapGetters([
            'getTotal',
            'getChecked',
            'getPrice'
        ]),
        // totalCount() {
        //     let count = 0;
        //     this.list.map(item => {
        //         count += Number(item.count);
        //     });
        //     return count;
        // },
        // checkedCount() {
        //     let count = 0;
        //     this.list.map(item => {
        //         if (item.checked) {
        //             count += Number(item.count);
        //         }
        //     });
        //     return count;
        // },
        // totalPrice() {
        //     let price = 0;
        //     this.list.map(item => {
        //         if (item.checked) {
        //             price += item.price * item.count;
        //         }
        //     });
        //     return price;
        // }
    },
    watch: {
        allChecked() {
            if (this.allChecked) {
                this.list.map(item => {
                    item.checked = true;
                })
            } else {
                this.list.map(item => {
                    item.checked = false;
                })
            }
        }
    },
    methods: {
        ...Vuex.mapActions([
            'getList'
        ])
    },
    components: {
        ShopcarListItem
    },
    created() {
        this.getList();
    },
    template: `
      <div>
        <h1>购物车</h1>
        <div class='shopcar-info-list'>
            <table>
                <thead>
                    <tr>
                        <th class='first'>
                          <label>
                            <input type='checkbox' v-model='allChecked' />
                            全选
                          </label>
                        </th>
                        <th>商品名称</th>
                        <th>商品价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <ShopcarListItem :goodInfo='item' v-for='item of list' :key='item.id'></ShopcarListItem>
                </tbody>
            </table>
            <div class='statistics'>
              <div class='fl count'>
                <p>
                  总计：共<span>{{getTotal}}</span>件商品，已选择<span>{{getChecked}}</span>件
                </p>
              </div>
              <div class='fr money'>
                <p>
                  合计：<span>{{getPrice}}</span>元
                  <button>去结算</button>
                </p>
              </div>
            </div>
        </div>
      </div>
    `,
};