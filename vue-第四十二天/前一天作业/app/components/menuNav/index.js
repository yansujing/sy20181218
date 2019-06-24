
export default {
  name: 'MenuNav',
  template: `<div class='menu-nav'>
                 <ul class='ui-flex align-center'>
                   <li class='flex-1 center'>
                     <router-link :to='{name:"home"}'>
                       <p class="iconfont icon-home"></p>
                       <p>首页</p>
                     </router-link>
                   </li>
                   <li class='flex-1 center'>
                     <router-link :to='{name:"classify"}'>
                       <p class="iconfont icon-classify"></p>
                       <p>分类</p>
                     </router-link>
                   </li>
                   <li class='flex-1 center'>
                     <router-link :to='{name:"shopcar"}'>
                       <p class="iconfont icon-shopcar"></p>
                       <p>购物车</p>
                     </router-link>
                   </li>
                   <li class='flex-1 center'>
                     <router-link :to='{name:"mine"}'>
                       <p class="iconfont icon-mine"></p>
                       <p>我的</p>
                     </router-link>
                   </li>
                 </ul>
               </div>`
};
