
// 定义 共享数据对象 （包含数据与对数据的操作）
let dataShare = {
    list: [
        {
            id: '1',
            name: '小米6',
            price: 1699,
            count: 2,
            checked: false
        },
        {
            id: '2',
            name: '红米3',
            price: 699,
            count: 1,
            checked: true
        },
        {
            id: '3',
            name: '小米8',
            price: 2899,
            count: 1,
            checked: false
        }
    ],
    del(item) {
        let index = this.list.indexOf(item);
        this.list.splice(index, 1);
    },
    decrease(item) {
        let index = this.list.indexOf(item);
        if (this.list[index].count) {
            this.list[index].count--;
        }
    },
    increase(item) {
        let index = this.list.indexOf(item);
        this.list[index].count++;
    }
};


// 购物车列表项组件
const ShopcarListItem = {
    props: {
        goodInfo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // 获取共享数据对象
            dataOperation: dataShare
        }
    },
    template: `
    <tr class='shopcar-info-item'>
      <td>
        <input type='checkbox' v-model='goodInfo.checked' />
      </td>
      <td>{{goodInfo.name}}</td>
      <td>{{goodInfo.price}}</td>
      <td class='num'>
        <button @click='decrease'>-</button>
        <input v-model='goodInfo.count' type="number" />
        <button @click='increase'>+</button>
      </td>
      <td>
        <button @click='del' class='del'>删除</button>
      </td>
    </tr>
    `,
    watch: {
        'goodInfo.checked'() {
            console.log('checkbox-change');
            this.$emit('checkbox-change');
        }
    },
    methods: {
        del() {
            this.dataOperation.del(this.goodInfo);
        },
        decrease() {
            this.dataOperation.decrease(this.goodInfo);
        },
        increase() {
            this.dataOperation.increase(this.goodInfo);
        }
    }
}

// 购物车列表容器组件
const ShopcarList = {
    data() {
        return {
            // 获取共享数据对象
            dataOperation: dataShare,
            allChecked: false
        }
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
                            <input type='checkbox' v-model='allChecked' @change='setAllChecked' />
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
                    <ShopcarListItem :goodInfo='item' v-for='item of dataOperation.list' @checkbox-change='setIsAllChecked' :key='item.id'></ShopcarListItem>
                </tbody>
            </table>
            <div class='statistics'>
              <div class='fl count'>
                <p>
                  总计：共<span>{{computeResult.totalCount}}</span>件商品，已选择<span>{{computeResult.checkedCount}}</span>件
                </p>
              </div>
              <div class='fr money'>
                <p>
                  合计：<span>{{computeResult.totalPrice}}</span>元
                  <button>去结算</button>
                </p>
              </div>
            </div>
        </div>
      </div>
    `,
    methods: {
        setAllChecked() {
            if (this.allChecked) {
                this.dataOperation.list.map(item => {
                    item.checked = true;
                })
            } else {
                this.dataOperation.list.map(item => {
                    item.checked = false;
                })
            }
        },
        setIsAllChecked() {
            for (let item of this.dataOperation.list) {
                if (!item.checked) {
                    this.allChecked = false;
                    break;
                }
                this.allChecked = true;
            }
            console.log(this.allChecked);
        }
    },
    computed: {
        computeResult() {
            const obj = {
                totalCount: 0,
                checkedCount: 0,
                totalPrice: 0
            };
            this.dataOperation.list.map(item => {
                obj.totalCount += Number(item.count);
                if (item.checked) {
                    obj.checkedCount += Number(item.count);
                    obj.totalPrice += item.price * item.count;
                }
            });
            return obj;
        }
    },
    components: {
        ShopcarListItem
    }
}

const vm = new Vue({
    el: '#app',
    components: {
        ShopcarList
    }
});






