
import MenuNav from './components/menuNav/index.js';

export default {
  name: 'App',
  template: `<div id="app"> 
               <div class='header'></div>
               <keep-alive>
                 <div class='main'>
                   <router-view></router-view>
                 </div>
               </keep-alive>
               <transition name='move' appear>
                 <MenuNav v-show='isShow' class='bottom'></MenuNav>
               </transition>
             </div>`,
  data() {
    return {
      showRoutes: ['home', 'classify', 'shopcar', 'mine']
    }
  },
  computed: {
    isShow() {
      return this.showRoutes.indexOf(this.$route.name) !== -1;
    }
  },
  components: {
    MenuNav
  }
};
