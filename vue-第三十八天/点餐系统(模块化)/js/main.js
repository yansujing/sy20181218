

import BarCom from './components/barCom.js';
import ElTabPane from './components/elTabPane.js';
import ElTabs from './components/elTabs.js';
import OfftenFood from './components/offtenFood/offtenFood.js';
import CurrentOrder from './components/currentOrder.js';

// 注册全局组件
import './gobalComponents/index.js';

import { bus } from './bus.js';

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
                        imgUrl: './images/coco.jpg',
                        width: 180,
                        height: 198
                    },
                    {
                        id: '2',
                        name: '雪碧',
                        count: 0,
                        price: 7,
                        imgUrl: './images/spirit.jpeg',
                        width: 180,
                        height: 198
                    },
                    {
                        id: '3',
                        name: '芬达',
                        count: 0,
                        price: 7,
                        imgUrl: './images/fenda.jpg',
                        width: 180,
                        height: 198
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
                        imgUrl: './images/hamburger.jpeg',
                        width: 180,
                        height: 198
                    },
                    {
                        id: '5',
                        name: '奥尔良鸡腿堡',
                        count: 0,
                        price: 15,
                        imgUrl: './images/aoerliangham.jpg',
                        width: 180,
                        height: 198
                    },
                    {
                        id: '6',
                        name: '鸡腿堡',
                        count: 0,
                        price: 10,
                        imgUrl: './images/jituiham.jpeg',
                        width: 180,
                        height: 198
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
                        imgUrl: './images/shutiaoL.jpg',
                        width: 180,
                        height: 198
                    },
                    {
                        id: '8',
                        name: '中薯',
                        count: 0,
                        price: 10,
                        imgUrl: './images/shutiaoM.jpg',
                        width: 180,
                        height: 198
                    },
                    {
                        id: '9',
                        name: '小薯',
                        count: 0,
                        price: 6,
                        imgUrl: './images/shutiaoS.jpeg',
                        width: 180,
                        height: 198
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



