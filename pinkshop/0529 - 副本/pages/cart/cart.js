// pages/cart/cart.js
import helper from '../../utils/helper.js'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    myhost: app.globalData.myhost,
    cartDatas: {},
    hasData: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(1111)
    // let openid = wx.getStorageSync('openid')

    // // 获取购物车的数据
    // var cartDatas = wx.getStorageSync(openid);
    // console.log(cartDatas)
    // let nums = helper.getCartCount()
    // if (nums > 0) {
    //   this.setData({
    //     hasData: false,
    //     cartDatas: cartDatas
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    this.getCartDatas();

    this.countTotalPrice();

  },
  // 数量加1
  adds(e) {
    // console.log(e)
    let type = e.currentTarget.dataset.bmm;

    let index = e.currentTarget.dataset.index;

    helper.add(type, index)

    this.getCartDatas();

    this.countTotalPrice();


  },
  getCartDatas() {
    let nums = helper.getCartCount()
    // 设置tabbar 的数量
    wx.setTabBarBadge({
      index: 2,
      text: nums.toString()
    })

    let openid = wx.getStorageSync('openid')

    // 获取购物车的数据
    var cartDatas = wx.getStorageSync(openid);
    // console.log(cartDatas)
    let numst = helper.getCartCount()
    if (numst > 0) {
      this.setData({
        hasData: false,
        cartDatas: cartDatas
      })
    }
    if(numst=0){
      this.setData({
        hasData:true,
      })
    }
  },
  sub(e) {
    let type = e.currentTarget.dataset.bmm;

    let index = e.currentTarget.dataset.index;

    helper.sub(type, index, this)

    // this.getCartDatas();

  },
  // 删除项目
  remove(e) {
    let type = e.currentTarget.dataset.bmm;

    let index = e.currentTarget.dataset.index;

    helper.del(type, index, this)
  },
  // 统计总价格
  countTotalPrice() {

    let openid = wx.getStorageSync('openid')

    // 获取购物车的数据
    var cartDatas = wx.getStorageSync(openid);

    var tatalPrice = 0;
    if (cartDatas) {
      if (cartDatas.book.length > 0) {
        for (let i = 0; i < cartDatas.book.length; i++) {
          tatalPrice += cartDatas.book[i].count * cartDatas.book[i].price
        }
      }

      if (cartDatas.music.length > 0) {
        for (let i = 0; i < cartDatas.music.length; i++) {
          tatalPrice += cartDatas.music[i].count * cartDatas.music[i].price
        }
      }
      if (cartDatas.movie.length > 0) {
        for (let i = 0; i < cartDatas.movie.length; i++) {
          tatalPrice += cartDatas.book[i].movie * cartDatas.movie[i].price
        }
      }
      tatalPrice = tatalPrice.toFixed(2);
      console.log(tatalPrice)
      this.setData({
        tatalPrice: tatalPrice
      })
    }


  },
  goToOrder() {
    wx.navigateTo({
      url: '../order/order',
    })
  }
})