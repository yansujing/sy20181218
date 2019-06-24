



const AppTitle = {
    data() {
        return {
            obj: {
                title: '淘宝一下',
                url: 'https://www.taobao.com'
            }
        }
    },
    template: `<div>
                 <slot name='header' :user="obj"></slot>
                 <slot name='default'></slot>
                 <slot name='footer'></slot>
               </div>`
};
Vue.component('AppTitle', AppTitle);

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        url: 'https://www.baidu.com',

        flag: true
    }
});


