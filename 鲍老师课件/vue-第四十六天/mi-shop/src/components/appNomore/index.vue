<template>
  <div ref="nomore" class="ui-flex align-center justify-center no-more">
    <p>--------我也是有底线的--------</p>
  </div>
</template>

<script>
export default {
  name: "appNomore"
};
</script>

<style lang="scss" scoped>
.no-more {
  height: pxToVw(60);
  p {
    color: #666;
    text-align: center;
    font-size: pxToVw(14);
  }
}
</style>
