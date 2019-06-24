// pages/scan/scan.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    myhost: app.globalData.myhost

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getUserInfo()
  },
  getUserInfo() {
    const that = this
    const openid = wx.getStorageSync('openid')

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
        console.log(res.data)
        that.setData({
          userInfo: res.data
        })
      }
    })

  },
  scanning() {

    // 允许从相机和相册扫码
    wx.scanCode({
      success(res) {
        console.log(res)
        // 条形码
        let code = res.result

        if (code.length === 13) {

          // 根据该条形码，跳转到详情页
          wx.request({
            url: app.globalData.myApi + 'getProductId.php', //仅为示例，并非真实的接口地址
            data: {
              code: code,
              y: ''
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              console.log(res.data)
              if (res.data === null) {
                console.log('扫码出错')
              } else {
                if (res.data.go === 'book') {
                  wx.navigateTo({
                    url: '../detail_book/detail_book?id=' + res.data.id,
                  })
                } else if (res.data.go === 'music') {
                  wx.navigateTo({
                    url: '../detail_music/detail_music?id=' + res.data.id,
                  })
                } else if (res.data.go === 'movie') {
                  wx.navigateTo({
                    url: '../detail_movie/detail_movie?id=' + res.data.id,
                  })
                }
              }

            }
          })

        }


      }
    })


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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})