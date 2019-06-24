<template>
  <section v-swiperBack class="height-100 login">
    <AppHeader title="登录" :isSearch="false" class="app-header"></AppHeader>
    <section class="main">
      <p class="bottom-border">
        <input v-model.trim="user.name" placeholder="请输入您的用户名">
      </p>
      <p v-if="!validate.username" class="error-tip">用户名无效</p>
      <p class="ui-flex align-center bottom-border">
        <input
          :type="!showPassword?'password':'text'"
          v-model.trim="user.password"
          class="flex-1"
          placeholder="请输入您的密码"
        >
        <span v-if="isShowPasswordValue" @click="switchPasswordValue">{{showPasswordValue}}</span>
      </p>
      <p v-if="!validate.password" class="error-tip">密码无效</p>
      <p>
        <button @click="login">登录</button>
      </p>
      <p>
        <router-link :to="{name:'register'}">立即注册</router-link>
        <span>|</span>
        <router-link :to="{name:'developing'}">忘记密码</router-link>
      </p>
    </section>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import regexp from "../../service/regexp";
export default {
  name: "login",
  data() {
    return {
      user: {
        name: "",
        password: ""
      },
      validate: {
        username: true,
        password: true
      },
      showPassword: false
    };
  },
  computed: {
    showPasswordValue() {
      return !this.showPassword ? "显示" : "隐藏";
    },
    isShowPasswordValue() {
      return this.user.password;
    }
  },
  watch: {
    "user.name"() {
      this.validate.username = regexp(this.user.name, "username");
    },
    "user.password"() {
      this.validate.password = regexp(this.user.password, "password");
    }
  },
  methods: {
    ...mapMutations(["setToken"]),
    switchPasswordValue() {
      this.showPassword = !this.showPassword;
    },
    login() {
      if (this.user.name && this.user.password) {
        if (this.validate.username && this.validate.password) {
          // console.log(this.$route.query.redirect);
          // this.setToken("123456");

          // const redirect = {};
          // if (this.$route.query.redirect) {
          //   redirect.name = this.$route.query.redirect.name || "home";
          //   if (this.$route.query.redirect.id) {
          //     redirect.params = {
          //       id: this.$route.query.redirect.id
          //     };
          //   }
          // } else {
          //   redirect.name = "home";
          // }
          // console.log(redirect);
          // this.$router.replace(redirect);

          this.setToken("123456");
          console.log(this.$route.query.redirect);
          const name = this.$route.query.redirect || "home";
          this.$router.replace({ name: name });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  .app-header {
    background-color: #f2f2f2;
  }
  .main {
    background-color: #fff;
    padding: pxToVw(64) pxToVw(37) 0 pxToVw(37);
    margin-bottom: 0;
    p {
      text-align: center;
      input {
        padding: pxToVw(7.5);
        font-size: pxToVw(18);
        width: 100%;
      }
      a,
      span {
        display: inline;
        color: #666;
        font-size: pxToVw(18);
      }
      a:last-child {
        color: #ff6700;
      }
      button {
        width: 100%;
        background-color: #ff6700;
        border-radius: 5px;
        font-size: pxToVw(20);
        padding: pxToVw(11) 0;
        margin-top: pxToVw(37.5);
        color: #fff;
      }
    }
    .bottom-border {
      margin-bottom: pxToVw(15);
      border-bottom: 1px solid #666;
    }
    .error-tip {
      color: #ff6700;
      font-size: pxToVw(16);
      margin-top: pxToVw(10);
    }
    .ui-flex {
      span {
        width: pxToVw(60);
      }
    }
  }
}
</style>
