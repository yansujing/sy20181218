

// tab切换 项目组件
const elTabPane = {
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
    template: `<div v-show='isActive' class='tab-panel-content'>
                 <slot></slot>
               </div>`
};


// tab切换 容器组件
const elTabs = {
    props: {
        currentTabPanel: {
            type: String
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
        console.log(this.$children);
        this.tabs = this.$children;
        this.currentTabPanelName = this.currentTabPanel;

        this.changeTab(this.currentTabPanelName);
    }
};


// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        name: 'first'
    },
    components: {
        elTabPane,
        elTabs
    }
});


