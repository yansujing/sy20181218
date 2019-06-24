<template>
  <div class="classify-content">
    <img :src="content.titleImg">
    <p>--{{content.name}}--</p>
    <section class="ui-flex wrap">
      <router-link v-for="item of content.list" :key="item.id" :to="{name:'home'}">
        <img :src="item.img">
        <p>{{item.name}}</p>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "classifyContent",
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.classify-content {
  text-align: center;
  img {
    height: pxToVw(100);
  }
  p {
    font-size: pxToVw(15);
    margin: pxToVw(35) 0;
    letter-spacing: 4px;
  }
  a {
    width: 33.33%;
    img {
      width: pxToVw(52);
      height: pxToVw(52);
    }
    p {
      font-size: pxToVw(12);
      color: #666;
      margin: pxToVw(15) 0;
      letter-spacing: 0px;
    }
  }
}
</style>
