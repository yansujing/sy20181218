<template>
  <section class="app-header">
    <span v-if="isBack" @click="back" class="iconfont icon-backer span-left"></span>
    <p>{{title}}</p>
    <span v-if="isSearch" @click="search" class="iconfont icon-search span-right"></span>
  </section>
</template>

<script>
export default {
  name: "appHeader",
  props: {
    title: {
      type: String
    },
    isBack: {
      type: Boolean,
      default: true
    },
    isSearch: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    search() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  color: #666;
  span {
    position: absolute;
    top: 0;
    font-size: 22px;
  }
  .span-left {
    left: 15px;
  }
  .span-right {
    right: 15px;
  }
  p {
    font-size: 16px;
    text-align: center;
  }
}
</style>
