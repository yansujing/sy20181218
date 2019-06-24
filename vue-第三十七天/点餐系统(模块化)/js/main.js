
// 事件bus
const bus = new Vue();

// 过渡组件
const TransitionCom = {
    props: {
        isGroup: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            required: true
        }
    },
    template: `<transition name='slideLeft' v-if='!isGroup'>
                 <slot></slot>
               </transition>
               <transition-group name='slideLeft' tag='div' class='current-order-ul' v-else>
                 <slot></slot>
               </transition-group>`
};
Vue.component('TransitionCom', TransitionCom);

// tab切换 项目组件
const ElTabPane = {
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    template: `<TransitionCom name='slideLeft'>
                 <div v-show='isActive' class='tab-panel-content'>
                   <slot></slot>
                 </div>
               </TransitionCom>`
};
// tab切换 容器组件
const ElTabs = {
    props: {
        currentTabPanel: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            tabs: [],
            currentTabPanelName: ''
        }
    },
    methods: {
        changeTab(name) {
            this.currentTabPanelName = name;

            this.tabs.map(item => {
                item.isActive = (item.name === this.currentTabPanelName);
            });
        }
    },
    watch: {
        currentTabPanel(newValue, oldValue) {
            this.changeTab(newValue);
        }
    },
    template: `<div class='tab'>
                 <div class='tab-header'>
                   <ul class='flex'>
                     <li @click='changeTab(item.name)' :class='{tabBtnActived:currentTabPanelName===item.name}' v-for='(item,index) of tabs' :key='index' class='flex-1 center cursor'>{{item.label}}</li>
                   </ul>
                 </div>
                 <div class='tab-content'>
                   <slot></slot>
                 </div>
               </div>`,
    mounted() {
        this.tabs = this.$children;
        if (this.currentTabPanel) {
            this.currentTabPanelName = this.currentTabPanel;
        } else {
            this.currentTabPanelName = this.tabs[0].name;
        }
        this.changeTab(this.currentTabPanelName);
    }
};


// 栏组件
const BarCom = {
    props: {
        barTitle: {
            type: String,
            required: true
        }
    },
    template: `<div class='bar'>
                <h1 class='bar-title'>{{barTitle}}</h1>
                <div class='bar-content'>
                  <slot></slot>
                </div>
              </div>`
};

// 单个食品组件
const SingleFood = {
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
    template: `<li>
                <img :src='foodInfo.imgUrl' />
                <p>
                  <span>{{foodInfo.name}}</span>
                  <span>{{foodInfo.price}}（元）</span>
                </p>
                <button @click='add'>点击添加</button>
              </li>`
};

// 常点食品组件
const OfftenFood = {
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

// 当前订单组件
const CurrentOrder = {
    props: {
        orderList: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    methods: {
        del(food) {
            bus.$emit('del-food', food);
        },
        decrease(food) {
            bus.$emit('decrease-food', food);
        },
        increase(food) {
            bus.$emit('increase-food', food);
        }
    },
    template: `<div>
                <ul class='order-ul'>
                  <li class='fl'>商品名称</li>
                  <li class='fl'>数量</li>
                  <li class='fl'>价格</li>
                  <li class='fl'>操作</li>
                </ul>
                <TransitionCom :isGroup='true' name='slideLeft'>
                <ul :key='food.id' v-for='food of orderList' class='order-ul'>
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
                      <span @click='del(food)'>删除</span>
                      <span @click='decrease(food)'>-</span>
                      <span @click='increase(food)'>+</span>
                    </span>
                  </li>
                </ul>
                </TransitionCom>
              </div>`
};


// 根组件实例
const vm = new Vue({
    el: '#app',
    data: {
        list: [],
        orderList: []
    },
    components: {
        BarCom,
        ElTabPane,
        ElTabs,
        OfftenFood,
        CurrentOrder
    },
    created() {
        // 从后台获取的食品数据
        const responseData = [
            {
                classify: '饮料',
                productList: [
                    {
                        id: '1',
                        name: '可口可乐',
                        count: 0,
                        price: 7,
                        imgUrl: './images/coco.jpg'
                    },
                    {
                        id: '2',
                        name: '雪碧',
                        count: 0,
                        price: 7,
                        imgUrl: './images/spirit.jpeg'
                    },
                    {
                        id: '3',
                        name: '芬达',
                        count: 0,
                        price: 7,
                        imgUrl: './images/fenda.jpg'
                    }
                ]
            },
            {
                classify: '主食',
                productList: [
                    {
                        id: '4',
                        name: '藤香鸡腿堡',
                        count: 0,
                        price: 18,
                        imgUrl: './images/hamburger.jpeg'
                    },
                    {
                        id: '5',
                        name: '奥尔良鸡腿堡',
                        count: 0,
                        price: 15,
                        imgUrl: './images/aoerliangham.jpg'
                    },
                    {
                        id: '6',
                        name: '鸡腿堡',
                        count: 0,
                        price: 10,
                        imgUrl: './images/jituiham.jpeg'
                    }
                ]
            },
            {
                classify: '小食',
                productList: [
                    {
                        id: '7',
                        name: '大薯',
                        count: 0,
                        price: 16,
                        imgUrl: './images/shutiaoL.jpg'
                    },
                    {
                        id: '8',
                        name: '中薯',
                        count: 0,
                        price: 10,
                        imgUrl: './images/shutiaoM.jpg'
                    },
                    {
                        id: '9',
                        name: '小薯',
                        count: 0,
                        price: 6,
                        imgUrl: './images/shutiaoS.jpeg'
                    }
                ]
            }
        ];
        this.list = responseData;


        bus.$on('food-add', data => {
            console.log(data);
            const index = this.orderList.indexOf(data);
            if (index === -1) {
                data.count = 1;
                this.orderList.push(data);
            } else {
                this.orderList[index].count++;
            }
        });

        bus.$on('del-food', data => {
            const index = this.orderList.indexOf(data);
            this.orderList.splice(index, 1);
        });

        bus.$on('decrease-food', data => {
            const index = this.orderList.indexOf(data);
            this.orderList[index].count--;
            if (this.orderList[index].count === 0) {
                this.orderList.splice(index, 1);
            }
        });

        bus.$on('increase-food', data => {
            const index = this.orderList.indexOf(data);
            this.orderList[index].count++;
        });
    }
});



