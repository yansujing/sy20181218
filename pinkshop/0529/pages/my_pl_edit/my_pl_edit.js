// pages/my_order/my_order.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    stars: 5,
    starsList: [app.globalData.host + 'source/static/ico/star.png', app.globalData.host + 'source/static/ico/star.png', app.globalData.host + 'source/static/ico/star.png', app.globalData.host + 'source/static/ico/star.png', app.globalData.host + 'source/static/ico/star.png'],
    commend:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.pid = options.pid;

    this.mcid = options.mcid

    this.pname = options.pname

    this.stars=options.stars

    this.commend = options.commend

    this.setData({
      pname: this.pname,
      stars:this.stars,
      commend:this.commend
    })

    // 改变星星的样式
    this.initStar()
  },
  // 选择星星
  selectStart(e) {
    // console.log(e)
    let currentSelect = e.currentTarget.id

    // 重置星星的数
    this.setData({
      stars: currentSelect
    })
    const tempArr = []
    // 重置星星样式
    for (let i = 1; i < 6; i++) {

      if (i > currentSelect) {
        var star = app.globalData.host + 'source/static/ico/star-gray.png'

      } else {
        var star = app.globalData.host + 'source/static/ico/star.png'
      }
      tempArr.push(star);
    }

    this.setData({
      starsList: tempArr
    })

  },
  formSubmit(e) {
    console.log(e)
    // 产品id
    let pid = this.pid;
    // 分类id
    let mcid = this.mcid
    // openid
    let openid = wx.getStorageSync('openid');

    // 星星数
    let stars = this.data.stars

    // 评论数
    let commend = e.detail.value.text

    if (pid && mcid && openid && stars && commend) {
      wx.request({
        url: app.globalData.myApi + 'editCommend.php', //仅为示例，并非真实的接口地址
        data: {
          pid: pid,
          mcid: mcid,
          openid: openid,
          stars: stars,
          commend: commend
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
          if(res.data==='ok'){
            wx.showToast({
              title: '评论修改成功！',
              icon: 'success',
              duration: 2000
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '参数不全',
      })
    }
  },
  initStar(){
    const tempArr = []
    // 重置星星样式
    for (let i = 1; i < 6; i++) {

      if (i > this.data.stars) {
        var star = app.globalData.host + 'source/static/ico/star-gray.png'

      } else {
        var star = app.globalData.host + 'source/static/ico/star.png'
      }
      tempArr.push(star);
    }

    this.setData({
      starsList: tempArr
    })
  }
})