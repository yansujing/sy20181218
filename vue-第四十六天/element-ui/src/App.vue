<template>
  <div id="app">
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
  </div>
</template>

<script>
// 按需引入（首先安装babel-plugin-component和babel-preset-env插件，然后在babel.config.js中做相关配置）
import { Switch } from "element-ui";
export default {
  name: "app",
  data() {
    return {
      value: true
    };
  },
  components: {
    ElSwitch: Switch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
