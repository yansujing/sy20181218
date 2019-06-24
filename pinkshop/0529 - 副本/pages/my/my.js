// pages/my/my.js
const app = getApp()
import helper from '../../utils/helper.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    photoUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    const that = this

    // 获取用户信息
    let openid = wx.getStorageSync('openid');
    wx.request({
      url: app.globalData.myApi + 'getUserInfo.php', //仅为示例，并非真实的接口地址
      data: {
        openid: openid,
        tag: 'getUserInfo'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data) {
          that.setData({
            photoUrl: app.globalData.myhost + res.data.user_header,
            name: res.data.user_name
          })
        }
      }
    })

    let nums = helper.getCartCount();

    // 设置tabbar 的数量
    wx.setTabBarBadge({
      index: 2,
      text: nums.toString()
    })
  },

  onGotUserInfo: function(e) {
    console.log(e)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
  },

  goToInfo() {
    wx.navigateTo({
      url: '../my_info/my_info',
    })
  },
  // 跳转到我的订单
  goToMyorder() {
    wx.navigateTo({
      url: '../my_order/my_order',
    })
  },
  // 到评论列表页面
  goToCommend(){
    wx.navigateTo({
      url: '../my_pl_list/my_pl_list',
    })
  },
  // 打电话
  call(){
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  }
})