<template>
  <div class="ui-flex tabCon">
    <div ref="tabHeader" class="tabHeader">
      <ul>
        <li
          @click="changeTab(index,$event)"
          v-for="(item,index) of tabBtns"
          :key="item.id"
          :class="{'tab-li-color':index===switchIndex}"
          class="ui-flex align-center justify-center"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="flex-1 tabContent">
      <div v-for="(item,index) of tabBtns" v-show="index===switchIndex" :key="item.id">
        <slot :name="'tabItem'+index"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabBtns: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      switchIndex: 0,
      distance: 0
    };
  },
  created() {
    if (this.currentIndex) {
      this.switchIndex = this.currentIndex;
    }
  },
  activated() {
    this.$refs.tabHeader.scrollTop = this.distance;
  },
  methods: {
    changeTab(index, e) {
      const li = e.target;
      // 点击菜单时应保证菜单项在可见范围内（容器中间），提高用户体验，控制菜单项容器的滚动
      // 应滚动距离
      this.distance = li.offsetTop - this.$refs.tabHeader.offsetHeight / 2;
      this.$refs.tabHeader.scrollTop = this.distance;
      this.switchIndex = index;
    }
  }
};
</script>
<style lang='scss' scoped>
.tabCon {
  background-color: #fff;
  .tabHeader {
    width: pxToVw(80);
    overflow: auto;
    height: 100%;
    border-right: 1px solid #efefef;
    ul {
      overflow: hidden;
      li {
        height: pxToVw(48);
        padding: 0 pxToVw(10);
        font-size: pxToVw(14);
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s;
      }
      .tab-li-color {
        color: #fb7d34;
        transform: scale(1.2);
      }
    }
  }
  .tabContent {
    padding: pxToVw(2) pxToVw(16);
    overflow: auto;
  }
}
</style>

