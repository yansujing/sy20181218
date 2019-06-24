<template>
  <div ref="pullRefresh" class="pull-refresh">
    <div ref="tipBox" class="tip-box">
      <div>{{tipInfo}}</div>
    </div>
    <div ref="refresh" class="refresh-box" :class="{trans:isTrans}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-pull-refresh",
  data() {
    return {
      startY: "",
      pullDistance: 0,
      tipInfo: "",
      el: null,
      tipBoxHeight: 0,
      isTrans: false
    };
  },
  methods: {
    // 绑定touch事件
    bindTouchEvent() {
      this.el.addEventListener("touchstart", this.touchStart);
      this.el.addEventListener("touchmove", this.touchMove);
      this.el.addEventListener("touchend", this.touchEnd);
    },
    // 开始touch，记录手指在y轴的位置
    // e:touchStart事件对象
    touchStart(e) {
      this.tipBoxHeight = this.$refs.tipBox.offsetHeight;
      this.isTrans = false;
      let touch = e.changedTouches[0];
      this.startY = touch.clientY;
      this.tipInfo = "下拉刷新";
    },
    // touch过程的监听，记录移动的距离
    // e:touchMove事件对象
    touchMove(e) {
      if (this.$refs.pullRefresh.scrollTop !== 0) {
        return;
      }
      let touch = e.changedTouches[0];
      // 获取下拉的距离
      let move = touch.clientY - this.startY;
      // 这里主要是让内容区随着下拉操作而往下滚动
      // move<this.tipBoxHeight * 2是设置一个下拉距离的上限,不能一直可以下拉，用户体验不好
      // 这里下拉操作主要是显示出顶上的一层tipInfo
      if (move > 0 && move < this.tipBoxHeight * 2) {
        this.el.style.top = move + "px";
        // 记录下拉的距离，为后面页面归位提供数据
        this.pullDistance = move;
        // 下拉到一定距离提示可以松手
        if (move > this.tipBoxHeight) {
          this.tipInfo = "松开即可刷新";
        } else {
          this.tipInfo = "下拉刷新";
        }
      }
    },
    // touch结束(松开手指)的监听
    // e:touchEnd事件对象
    touchEnd() {
      if (this.$refs.pullRefresh.scrollTop !== 0) {
        return;
      }
      this.isTrans = true;
      if (this.pullDistance > this.tipBoxHeight) {
        this.tipInfo = "数据加载中...";
        //提交触发父组件的加载数据的方法
        //要在父组件数据加载完成后才能将页面归位,所以把resolve通过事件参数传给父组件
        new Promise(resolve => {
          this.$emit("load", resolve);
        }).then(() => {
          this.resetBox();
        });
      } else {
        this.resetBox();
      }
    },
    // 将页面归位
    // 将移动的距离（pullDistance）还原
    resetBox() {
      if (this.pullDistance > 0) {
        this.el.style.top = 0;
      }
      this.tipInfo = "下拉刷新";
      this.pullDistance = 0;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.el = this.$refs.refresh;
      this.bindTouchEvent();
    });
  }
};
</script>

<style lang="scss" scoped>
.pull-refresh {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  .tip-box {
    position: absolute;
    width: 100%;
    line-height: pxToVw(40);
    height: pxToVw(40);
    text-align: center;
    font-size: pxToVw(14);
  }
  .refresh-box {
    position: absolute;
    width: 100%;
  }
  .trans {
    transition: top 0.4s;
  }
}
</style>
