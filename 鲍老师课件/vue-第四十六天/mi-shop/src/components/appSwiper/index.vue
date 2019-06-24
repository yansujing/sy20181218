<template>
  <section class="swiper">
    <swiper :options="swiperOption" v-if="dataType==='1'">
      <swiper-slide v-for="item of list" :key="item.id">
        <router-link :to="{name:'productDetail',params:{id:item.id}}">
          <img :src="item.url">
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <swiper :options="swiperOption" v-else>
      <swiper-slide v-for="(item,index) of list" :key="index">
        <img :src="item">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "appSwiper",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "my-bullet-active"
        }
      }
    };
  },
  props: {
    dataType: {
      type: String,
      default: "1"
    },
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 100%;
  a {
    height: 100%;
  }
  img {
    height: 100%;
  }
}
</style>
