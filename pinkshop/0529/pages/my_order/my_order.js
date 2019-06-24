// pages/my_order/my_order.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    ishas: true,
    myhost: app.globalData.myhost
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {


  },
  onShow() {
    // 获取订单信息
    this.getOrderData()
  },
  getOrderData() {
    const that = this
    let openid = wx.getStorageSync('openid')

    if (openid) {


      wx.request({
        url: app.globalData.myApi + 'getOrderDatas.php', //仅为示例，并非真实的接口地址
        data: {
          openid: openid,
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
          if (res.data.length > 0) {
            that.setData({
              orderDatas: res.data,
              ishas: true
            })
          } else {
            that.setData({
              ishas: false
            })
          }

        }
      })

    } else {
      console.log('参数出错ERROR342');
    }

  },
  // 跳转到评论页面
  goToRecommendAdd(e) {
    console.log(e);

    let pid = e.currentTarget.dataset.pid;
    let mcid = e.currentTarget.dataset.mcid
    let pname = e.currentTarget.dataset.pname
    wx.navigateTo({
      url: '../my_pl_add/my_pl_add?pid=' + pid + '&mcid=' + mcid + '&pname=' + pname,
    })

  },
  // 跳转到编辑评论页面
  editCommend(e) {
    let pid = e.currentTarget.dataset.pid;
    let mcid = e.currentTarget.dataset.mcid
    let pname = e.currentTarget.dataset.pname

    let stars = e.currentTarget.dataset.stars

    let commend = e.currentTarget.dataset.commend

    wx.navigateTo({
      url: '../my_pl_edit/my_pl_edit?pid=' + pid + '&mcid=' + mcid + '&pname=' + pname + '&stars=' + stars + '&commend=' + commend,
    })
  }

})