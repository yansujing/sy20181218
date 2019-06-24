import Vue from 'vue'
import App from './App.vue'

// 完整引入（不需要额外安装插件和配置）
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
