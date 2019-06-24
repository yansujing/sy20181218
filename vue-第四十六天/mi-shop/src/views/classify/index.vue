<template>
  <div class="height-100 classify">
    <AppHeader title="分类" :isBack="false"></AppHeader>
    <section class="main">
      <Tab :tabBtns="classifyMenu" class="tab">
        <ClassifyContent
          :content="item"
          v-for="(item,index) of classifyContent"
          :key="item.id"
          :slot="'tabItem'+index"
        ></ClassifyContent>
      </Tab>
    </section>
  </div>
</template>

<script>
import Tab from "./components/tab";
import ClassifyContent from "./components/classifyContent";
import api from "../../constant/api";
export default {
  name: "classify",
  data() {
    return {
      classifyMenu: [],
      classifyContent: []
    };
  },
  components: {
    Tab,
    ClassifyContent
  },
  methods: {
    getData() {
      this.$axios.get(api.classifyMenu).then(responseData => {
        this.classifyMenu = responseData.data.list;
      });
      this.$axios.get(api.classifyContent).then(responseData => {
        this.classifyContent = responseData.data.list;
      });
    }
  },
  activated() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  .tab {
    height: 100%;
  }
}
</style>
