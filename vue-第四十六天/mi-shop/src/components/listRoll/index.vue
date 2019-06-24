<template>
  <section class="list-roll">
    <ul :style="{top,transitionDuration}" ref="roll">
      <li v-for="item of list" :key="item.id" class="ellipsis">{{item.title}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "listRoll",
  props: {
    intervalTime: {
      type: Number,
      default: 1000
    },
    list: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      index: 0,
      transitionDuration: ".5s",
      setInterval: null
    };
  },
  computed: {
    top: {
      get() {
        return `-${this.index * 10}vw`;
      },
      set(value) {
        return `-${value * 10}vw`;
      }
    }
  },
  watch: {
    list() {
      this.$nextTick(() => {
        // 模板更新完成执行当前回调函数
        if (!this.setInterval) {
          const firstLi = this.$refs.roll.children[0].cloneNode(true);
          this.$refs.roll.appendChild(firstLi);
          this.setInterval = setInterval(() => {
            this.index++;
            if (this.index === this.list.length) {
              setTimeout(() => {
                this.transitionDuration = "0s";
                this.top = 0;
                this.index = 0;
              }, 500);
            }
            this.transitionDuration = ".5s";
          }, this.intervalTime);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-roll {
  position: relative;
  height: 10vw;
  overflow: hidden;
  background-color: #fff;
  ul {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 0 pxToVw(20);
    li {
      line-height: 10vw;
      font-size: pxToVw(12);
    }
  }
}
</style>
