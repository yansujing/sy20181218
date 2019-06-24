//app.js

import helper from './utils/helper.js'
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const that = this;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: that.globalData.myApi + 'getOpenId.php', //仅为示例，并非真实的接口地址
          data: {
            code: res.code,
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            // console.log(res.data)

            // 本地存储
            wx.setStorage({
              key: "openid",
              data: res.data.openid
            })
          }
        })
      }

    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    let nums=helper.getCartCount()
    // 设置tabbar 的数量
    wx.setTabBarBadge({
      index: 2,
      text: nums.toString()
    })
  },
  globalData: {
    userInfo: null,
    host: 'https://www.fuhushi.com/',
    myhost: 'https://www.fuhushi.com/web1012/yansujing/pinkshop/',
    myApi: 'https://www.fuhushi.com/web1012/yansujing/pinkshop/api/'
  }
})