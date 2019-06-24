// pages/my_pl_list/my_pl_list.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    const that = this
    this.getCommedList()
  },
  getCommedList() {
    const that = this
    // 或者OPENID
    let openid = wx.getStorageSync('openid')

    // 做网络请求
    wx.request({
      url: app.globalData.myApi + 'getCommedList.php', //仅为示例，并非真实的接口地址
      data: {
        openid: openid,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data) {
          that.setData({
            plData: res.data
          })
        }
        wx.hideLoading()
      }
    })

  },
  edit(e) {
    // console.log(e)
    let pid = e.currentTarget.dataset.pid
    let mcid = e.currentTarget.dataset.mcid
    let pname = e.currentTarget.dataset.pname
    let stars = e.currentTarget.dataset.stars
    let commend = e.currentTarget.dataset.commend

    wx.navigateTo({
      url: '../my_pl_edit/my_pl_edit?pid=' + pid + '&mcid=' + mcid + '&pname=' + pname + '&stars=' + stars + '&commend=' + commend,
    })


  },
  del(e) {
    console.log(e);
const that =this;
    let id = e.currentTarget.id

    wx.request({
      url: app.globalData.myApi + 'delCommend.php', //仅为示例，并非真实的接口地址
      data: {
        id: id,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if(res.data=='ok'){
          that.getCommedList()
        }else{
          wx.showToast({
            title: '失败',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  }
})