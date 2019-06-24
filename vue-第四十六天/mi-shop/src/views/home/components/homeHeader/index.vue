<template>
  <div class="home-header ui-flex">
    <div class="ui-flex align-center width-30 logo">
      <img src="../../../../assets/img/logo.png">
    </div>
    <div class="ui-flex flex-1 align-center search">
      <router-link :to="{name:'search'}" class="ui-flex align-center">
        <span class="iconfont icon-search"></span>
        <span>搜索商品名称</span>
      </router-link>
    </div>
    <div class="ui-flex align-center justify-end width-30 mine">
      <router-link :to="{name:'mine'}" class="iconfont icon-mine"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeHeader"
};
</script>

<style lang="scss" scoped>
.home-header {
  padding: 0 15px;
  .width-30 {
    width: 30px;
  }
  .logo {
    img {
      width: 22px;
      height: 20px;
    }
  }
  .search {
    a {
      background-color: #fff;
      border-radius: 5px;
      width: 100%;
      height: 32px;
      padding: 6px;
      color: #666;
      span {
        font-size: 14px;
      }
      .icon-search {
        margin-right: pxToVw(5);
      }
    }
  }
  .mine {
    .icon-mine {
      color: #666;
      font-size: 22px;
    }
  }
}
</style>
