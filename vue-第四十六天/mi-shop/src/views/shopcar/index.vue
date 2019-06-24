<template>
  <div class="height-100 shopcar">
    <AppHeader title="购物车" :isBack="false"></AppHeader>
    <section class="main">
      <AppPullRefresh @load="getData">
        <section v-if="!shopcarList.length" class="shopcar-none">
          <router-link :to="{name:'home'}">
            <img src="../../assets/img/empty-car.png">
          </router-link>
        </section>
        <section class="shopcar-list">
          <ul>
            <li v-for="(item,index) of shopcarList" :key="item.id" class="ui-flex align-center">
              <div class="ui-flex check">
                <input
                  v-if="!item.invalid"
                  @change="checkProduct({index:index,check:item.check})"
                  v-model="item.check"
                  type="checkbox"
                >
              </div>
              <div class="ui-flex align-center info">
                <router-link :to="{name:'productDetail',params:{id:item.id}}">
                  <img :src="item.imgUrl">
                </router-link>
                <div>
                  <p class="ellipsis title">{{item.title}}</p>
                  <p class="ellipsis price">售价：{{item.price}}元</p>
                  <div class="ui-flex count">
                    <p
                      @click="decrementProduct(index)"
                      class="ui-flex align-center justify-center flex-1"
                    >
                      <span>-</span>
                    </p>
                    <p class="ui-flex align-center justify-center flex-1">
                      <span>{{item.count}}</span>
                    </p>
                    <p
                      @click="incrementProduct({index:index,stock:item.stock})"
                      class="ui-flex align-center justify-center flex-1"
                    >
                      <span>+</span>
                    </p>
                  </div>
                </div>
              </div>
              <div @click="delProduct(index)" class="ui-flex align-self-end del">
                <span class="iconfont icon-del"></span>
              </div>
            </li>
          </ul>
        </section>
        <section class="shopcar-guess">
          <img src="../../assets/img/guess-love.jpg">
        </section>
        <section class="recommend-list">
          <ul class="ui-flex wrap justify-space-between">
            <li v-for="item of recommendList" :key="item.id">
              <router-link :to="{name:'productDetail',params:{id:item.id}}">
                <img :src="item.imgUrl">
                <div class="desc">
                  <p class="ellipsis title">{{item.title}}</p>
                  <p class="ellipsis price">{{item.price}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </section>
        <AppNomore></AppNomore>
      </AppPullRefresh>
    </section>
    <section class="ui-flex shopcar-operation">
      <div class="ui-flex align-center justify-center wrap flex-1 price">
        <p>
          共
          <span>{{countPrice.count}}</span>件 金额：
        </p>
        <p>
          <span class="total">{{countPrice.price}}</span>元
        </p>
      </div>
      <div class="ui-flex align-center justify-center flex-1 operation">
        <router-link :to="{name:'classify'}">继续购物</router-link>
      </div>
      <div class="ui-flex align-center justify-center flex-1 operation settlement">
        <router-link :to="{name:'home'}">去结算</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import storage from "../../service/storage";
import isExist from "../../utils/isExist";
import api from "../../constant/api";
export default {
  name: "shopcar",
  data() {
    return {
      recommendList: []
    };
  },
  computed: {
    ...mapState(["shopcarList"]),
    countPrice() {
      const obj = {
        count: 0,
        price: 0
      };
      this.shopcarList.map(item => {
        if (item.check) {
          obj.count += item.count;
          obj.price += item.count * item.price;
        }
      });
      return obj;
    }
  },
  methods: {
    ...mapMutations([
      "delProduct",
      "incrementProduct",
      "decrementProduct",
      "checkProduct",
      "validProduct",
      "setShopcarList"
    ]),
    getData(resolve) {
      if (storage.getInfo("shopcarList")) {
        this.setShopcarList(storage.getInfo("shopcarList"));
      }
      this.$axios
        .all([
          this.$axios.get(api.getShopcar),
          this.$axios.get(api.recommendList)
        ])
        .then(
          this.$axios.spread((responseData1, responseData2) => {
            responseData1.data.list.map(item => {
              let obj = isExist(item.id, this.shopcarList);
              if (obj.isExist) {
                this.validProduct({ index: obj.index, invalid: item.invalid });
              }
            });
            this.recommendList = responseData2.data.list;
            resolve && resolve();
          })
        );
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.shopcar {
  .main {
    margin-bottom: $footerHeight * 2;
  }
  .shopcar-list {
    li {
      height: pxToVw(116);
      padding: pxToVw(12);
      border-bottom: 1px solid #f6f6f6;
      background-color: #fff;
      .check {
        width: pxToVw(32);
        input {
          width: pxToVw(20);
          height: pxToVw(20);
          border: 1px solid #000;
        }
      }
      .info {
        width: pxToVw(290);
        img {
          width: pxToVw(91);
          height: pxToVw(91);
          margin-right: pxToVw(8);
        }
        div {
          width: pxToVw(191);
          p {
            margin-bottom: pxToVw(4);
          }
          .title {
            font-size: pxToVw(15);
          }
          .price {
            font-size: pxToVw(12);
          }
          .count {
            width: pxToVw(91);
            font-size: pxToVw(16);
            p {
              border: 1px solid #999;
              text-align: center;
              height: pxToVw(31);
            }
            p:nth-child(2) {
              border-left: none;
              border-right: none;
            }
          }
        }
      }
      .del {
        span {
          font-size: pxToVw(24);
        }
      }
    }
  }
  .recommend-list {
    .ui-flex {
      li {
        width: 49.5%;
        background-color: #fff;
        p,
        img {
          margin-bottom: pxToVw(8);
        }
        img {
          height: auto;
        }
        .desc {
          padding: 0 pxToVw(14);
          .title {
            color: #3c3c3c;
            font-size: pxToVw(15);
          }
          .price {
            color: #ff6700;
            font-size: pxToVw(17);
          }
        }
      }
    }
  }
  .shopcar-operation {
    position: absolute;
    bottom: $footerHeight;
    height: $footerHeight;
    width: 100%;
    background-color: #fff;
    text-align: center;
    .price {
      font-size: 16px;
      color: #999;
      .total {
        font-size: 20px;
        color: #ff5722;
      }
    }
    .operation {
      background-color: #f4f4f4;
      a {
        font-size: 18px;
        color: #000;
      }
    }
    .settlement {
      background-color: #ff5722;
      a {
        color: #fff;
      }
    }
  }
}
</style>
