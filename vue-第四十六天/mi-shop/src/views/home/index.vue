<template>
  <section class="height-100 home">
    <HomeHeader class="home-header"></HomeHeader>
    <section class="main">
      <AppPullRefresh @load="getData">
        <AppSwiper :list="swiperList" class="app-swiper"></AppSwiper>
        <section
          class="ui-flex wrap align-center justify-space-between padding-top-8 home-classify"
        >
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
          <router-link :to="{name:'home'}">
            <p class="iconfont icon-mine"></p>
            <p>新品</p>
          </router-link>
        </section>
        <ListRoll :list="newsList" class="margin-top-8"></ListRoll>
        <section class="ui-flex wrap justify-space-between margin-top-8 home-product">
          <router-link :to="{name:'home'}">
            <img
              src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1c94b98d8401bf42fb771ff22faf50b.jpg?thumb=1&w=720&h=280"
            >
          </router-link>
          <router-link :to="{name:'home'}">
            <img
              src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9b126f79cc101813ce3f524f58105e4b.jpg?thumb=1&w=720&h=440"
            >
          </router-link>
          <section class="ui-flex wrap justify-space-between home-product-list">
            <router-link :to="{name:'home'}">
              <img
                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792"
              >
              <div>
                <p class="name">红米5</p>
                <p class="price">749起</p>
              </div>
            </router-link>
            <router-link :to="{name:'home'}">
              <img
                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792"
              >
              <div>
                <p class="name">红米5</p>
                <p class="price">749起</p>
              </div>
            </router-link>
            <router-link :to="{name:'home'}">
              <img
                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792"
              >
              <div>
                <p class="name">红米5</p>
                <p class="price">749起</p>
              </div>
            </router-link>
            <router-link :to="{name:'home'}">
              <img
                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792"
              >
              <div>
                <p class="name">红米5</p>
                <p class="price">749起</p>
              </div>
            </router-link>
          </section>
        </section>
        <AppNomore></AppNomore>
      </AppPullRefresh>
    </section>
  </section>
</template>

<script>
import HomeHeader from "./components/homeHeader";
import api from "../../constant/api";
export default {
  name: "home",
  data() {
    return {
      newsList: [],
      swiperList: []
    };
  },
  methods: {
    getData(resolve) {
      this.$axios
        .all([this.$axios.get(api.roll), this.$axios.get(api.swiper)])
        .then(
          this.$axios.spread((responseData1, responseData2) => {
            // 两个请求现在都执行完成
            this.newsList = responseData1.data.list;
            this.swiperList = responseData2.data.list;

            resolve && resolve();
          })
        )
        .catch(error => {
          console.log(error);
        });
      // this.$axios({
      //   method: "post",
      //   url: "http://www.bozedu.net:8888/article/main/index",
      //   data: {
      //     page: 1,
      //     limit: 3
      //   }
      // }).then();
    }
  },
  activated() {
    this.getData();
  },
  // watch: {
  //   // 如果路由有变化，会再次执行该方法
  //   $route() {
  //     this.getData();
  //   }
  // },
  components: {
    HomeHeader
  }
};
</script>

<style lang="scss" scoped>
.home-header {
  position: absolute;
  top: 0;
  width: 100%;
  height: $headerHeight;
  background-color: #f2f2f2;
}
.app-swiper {
  height: pxToVw(188);
}
.home-classify {
  background-color: #fff;
  a {
    width: 20%;
    margin-bottom: pxToVw(8);
    text-align: center;
    .iconfont {
      font-size: pxToVw(45);
    }
    p {
      font-size: pxToVw(12);
      color: #000;
    }
  }
}
.home-product-list {
  a {
    background-color: #fff;
    width: 49.5%;
    div {
      padding: pxToVw(10) pxToVw(14);
      .name {
        color: #000;
        font-size: pxToVw(15);
      }
      .price {
        font-size: pxToVw(17);
        color: #ff6700;
      }
    }
  }
}
</style>
