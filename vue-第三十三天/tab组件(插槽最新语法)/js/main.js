Vue.component('AppCom1', {
    template: `<div>AppCom1</div>`,
    created() {
        alert('AppCom1');
    }
});



// tab切换组件
const AppTabs = {
    props: {
        tabBtns: {
            type: Array,
            required: true
        },
        currentIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            dataIndex: 0
        }
    },
    methods: {
        change(index) {
            this.dataIndex = index;
        }
    },
    template: `<div class='tab'>
                 <div class='tab-header'>
                   <ul class='flex'>
                     <li :class='{tabBtnActived:dataIndex===index}' v-for='(item,index) of tabBtns' @click='change(index)' class='flex-1 center cursor'>{{item}}</li>
                   </ul>
                 </div>
                 <div class='tab-content'>
                   <div v-show='dataIndex===index' v-for='(item,index) of tabBtns'>
                      <slot :name='"tab"+index' ></slot>
                   </div>
                 </div>
               </div>`,
    created() {
        this.dataIndex = this.currentIndex;
    }
};


// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        tabBtns: [
            '当前订单',
            '挂单中',
            '已付款',
            '取消的订单'
        ]
    },
    components: {
        AppTabs
    }
});


