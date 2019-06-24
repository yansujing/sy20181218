<template>
  <div v-swiperBack class="height-100 product-detail">
    <AppHeader :isSearch="false"></AppHeader>
    <section class="main">
      <AppSwiper :list="product.imgList" data-type="2" class="app-swiper"></AppSwiper>
      <section class="info">
        <p>{{product.title}}</p>
        <p>{{product.discount}}</p>
        <p>{{product.desc}}</p>
        <p>{{product.price}}</p>
      </section>
      <section class="info">
        <p>{{product.title}}</p>
      </section>
      <section class="info">
        <img
          v-lazy="'//i8.mifile.cn/v1/a1/f6b42e48-8af9-c1c1-5df2-eb1973499aae.jpg?w=1080&h=1735&s=192.6'"
        >
        <img
          v-lazy="'//i8.mifile.cn/v1/a1/eb3d5e39-000d-bfb9-acce-e346876cfa94.jpg?w=1080&h=1387&s=171.9'"
        >
        <img
          v-lazy="'//i8.mifile.cn/v1/a1/5bb89342-dce9-82d4-59c7-a322376fc1a8.jpg?w=1080&h=1735&s=164'"
        >
        <img
          v-lazy="'//i8.mifile.cn/v1/a1/8ba93f97-a966-088d-7aa0-21f3a50f08ea.jpg?w=1080&h=1201&s=120.4'"
        >
        <img
          v-lazy="'//i8.mifile.cn/v1/a1/1f2ccbc5-8a7c-39ab-9819-5aec14d533b5.jpg?w=1080&h=1445&s=150.1'"
        >
      </section>
      <AppNomore></AppNomore>
    </section>

    <section class="ui-flex align-center shopcar-add">
      <div class="shopcar-add-router ui-flex align-center justify-center">
        <router-link :to="{name:'home'}">
          <span class="iconfont icon-home"></span>
          <p>首页</p>
        </router-link>
      </div>
      <div class="shopcar-add-router ui-flex align-center justify-center">
        <router-link :to="{name:'shopcar'}">
          <span class="iconfont icon-shop"></span>
          <p>购物车</p>
        </router-link>
      </div>
      <div class="flex-1 shopcar-add-product">
        <button @click="addProduct(product)">加入购物车</button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import api from "../../constant/api";
export default {
  name: "productDetail",
  data() {
    return {
      product: {
        imgList: []
      }
    };
  },
  methods: {
    ...mapMutations(["addProduct"]),
    getData() {
      this.$axios.get(api.productDetail).then(responseData => {
        responseData.data.list.map(item => {
          item.check = false;
          if (item.id === this.$route.params.id) {
            this.product = item;
          }
        });
      });
    }
  },
  activated() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.product-detail {
  .app-swiper {
    height: pxToVw(188);
  }
  .info {
    padding: pxToVw(8) pxToVw(15);
    margin-bottom: pxToVw(8);
    background-color: #fff;
    p {
      font-size: pxToVw(12);
    }
  }
  .shopcar-add {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: $footerHeight;
    background-color: #fff;
    text-align: center;
    div {
      height: 100%;
    }
    .shopcar-add-router {
      width: pxToVw(75);
      a {
        color: #999;
      }
      .iconfont {
        font-size: 21px;
      }
      span {
        display: block;
      }
      p {
        font-size: 12px;
      }
    }
    .shopcar-add-router:first-child {
      border-right: 1px solid #f5f5f5;
    }
    .shopcar-add-product {
      button {
        display: block;
        font-size: 17px;
        color: #fff;
        width: 100%;
        height: 100%;
        background-color: #ff6700;
      }
    }
  }
}
</style>
