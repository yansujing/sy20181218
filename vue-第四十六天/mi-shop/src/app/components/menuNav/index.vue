<template>
  <div class="menu-nav">
    <ul class="ui-flex align-center">
      <li class="flex-1">
        <router-link :to="{name:'home'}">
          <p class="iconfont icon-home"></p>
          <p>首页</p>
        </router-link>
      </li>
      <li class="flex-1">
        <router-link :to="{name:'classify'}">
          <p class="iconfont icon-classify"></p>
          <p>分类</p>
        </router-link>
      </li>
      <li class="flex-1">
        <router-link :to="{name:'shopcar'}">
          <p class="iconfont icon-shopcar"></p>
          <p>购物车</p>
        </router-link>
      </li>
      <li class="flex-1">
        <router-link :to="{name:'mine'}">
          <p class="iconfont icon-mine"></p>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "menuNav"
};
</script>

<style lang="scss" scoped>
.menu-nav {
  height: $footerHeight;
  background-color: #fff;
  .ui-flex {
    height: 100%;
    .flex-1 {
      a {
        color: #999;
        text-align: center;
        font-size: 12px;
        .iconfont {
          font-size: 22.5px;
        }
      }
      .router-link-active {
        color: #ff6700;
      }
    }
  }
}
</style>
