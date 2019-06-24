

export default {
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