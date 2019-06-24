<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <transition name="move">
      <MenuNav v-show="isShow" class="menu-nav"></MenuNav>
    </transition>
  </div>
</template>

<script>
import MenuNav from "./components/menuNav";
export default {
  name: "app",
  data() {
    return {
      showRoutes: ["home", "classify", "shopcar", "mine"]
    };
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
</script>

<style lang='scss'>
@import "../assets/sass/reset.scss";
@import "../assets/sass/public.scss";
@import "../assets/font/iconfont.css";

#app {
  .menu-nav {
    position: absolute;
    bottom: 0;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    width: 100%;
  }
}

.move-enter-active,
.move-leave-active {
  transition: transform 0.3s;
}
.move-enter-to {
  transform: translateY(0);
}
.move-enter,
.move-leave-to {
  transform: translateY(100%);
}
</style>
