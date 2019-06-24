// pages/detail_book/detail_book.js

//引入全局APP
const app = getApp()

import helper from '../../utils/helper.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    myhost: app.globalData.myhost,
    imgUrls: [
      app.globalData.host + 'source/static/images/temp.jpg',
      app.globalData.host + 'source/static/images/temp.jpg',
      app.globalData.host + 'source/static/images/temp.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    openid: '',
    currentCartCount: 0,
    commendList: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 加载中。。。
    wx.showLoading({
      title: '加载中',
    })
    // console.log(options); 
    this.id = options.id;
    // console.log(this.id)

    this.mcid = options.mcid

    // console.log(options.mcid)

    // 获取产品的数据
    this.getProductData();

    // 获取openid
    try {
      const value = wx.getStorageSync('openid')
      if (value) {
        this.setData({
          openid: value
        })
      }
    } catch (e) {
      // Do something when catch error
    }
    let nums = helper.getCartCount();
    this.setData({
      currentCartCount: nums
    })

    // 加载评论
    this.loadCommend()

  },
  goToHome() {
    wx.switchTab({
      url: '../home/home',
    })

  },
  // 获取产品的数据
  getProductData() {

    const that = this;
    // 请求数据
    wx.request({
      url: app.globalData.myApi + 'getBookDetail.php', //仅为示例，并非真实的接口地址
      data: {
        id: this.id,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)
        that.setData({
          bookData: res.data
        })

        wx.setNavigationBarTitle({
          title: res.data.book_name,
        })
        wx.hideLoading({})
        // 停止下拉刷新
        wx.stopPullDownRefresh()
      }
    })

  },
  // 加入购物车
  addToCart() {

    let pid = this.id;

    console.log(this)
    helper.addToCart(pid, 'book', this, app)

  },

  // 加入收藏
  addToCollect(e) {

    // console.log(e)

    // 产品id
    let pid = e.currentTarget.dataset.pid;

    // 一级分类
    let mcid = e.currentTarget.dataset.mcid;

    // 二级分类
    let scid = e.currentTarget.dataset.scid;

    // openid
    let openid = e.currentTarget.dataset.openid;

    // console.log(pid,mcid,scid,openid);

    if (!pid || !scid || !mcid || !openid) {

      wx.showToast({
        title: '缺少参数',
        icon: 'none',
        duration: 2000
      })

    } else {

      wx.request({
        url: app.globalData.myApi + 'addCollect.php', //仅为示例，并非真实的接口地址
        data: {
          pid: pid,
          mcid: mcid,
          scid: scid,
          openid: openid
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          // console.log(res.data)

          if (res.data === 'error') {
            wx.showToast({
              title: '收藏失败',
              icon: 'none',
              duration: 2000
            })

          } else if (res.data === 'exist') {

            wx.showToast({
              title: '已收藏',
              icon: 'none',
              duration: 2000
            })

          } else {

            wx.showToast({
              title: '收藏成功',
              icon: 'success',
              duration: 2000
            })

          }
        }
      })

    }

  },
  // 查看图书列表
  viewPublic(e) {

    let publicer = e.currentTarget.id;
    // console.log(publicer);
    wx.navigateTo({
      url: '../list_book/list_book?sBy=publicer&sValue=' + publicer,
    })


  },
  goToCart() {

    wx.switchTab({
      url: '../cart/cart',
    })
  },
  loadCommend() {

    const that = this
    // console.log(that.id)
    wx.request({
      url: app.globalData.myApi + 'getCommendDatas.php', //仅为示例，并非真实的接口地址
      data: {
        pid: that.id,
        mcid: that.mcid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)

        if (res.data.length > 0) {
          that.setData({
            commendList: res.data
          })
        }
      }
    })
  },
  buynow() {
    let pid = this.id

    console.log(pid);

    helper.addToCart(pid, 'book', this, app,'goToOrder')

    // wx.navigateTo({
    //   url: '../order/order',
    // })
  },
  // 分享
  share(){
    console.log('share')
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})