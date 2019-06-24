// pages/home/homw.js
import helper from '../../utils/helper.js'
//引入全局APP
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    myhost: app.globalData.myhost,
    imgUrls: [
      app.globalData.host + 'source/static/images/swiper1.jpg',
      app.globalData.host + 'source/static/images/swiper1.jpg',
      app.globalData.host + 'source/static/images/swiper1.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    textUrls: [
      '今日大促销，赶紧来抢购1111',
      '今日大促销，赶紧来抢购2222',
      '今日大促销，赶紧来抢购3333',
    ],
    bookClass: [],
    hotSaleTop3: [],
    nine9: [],
    fiveStarsBook: {},
    fiveStarsMusic: {},
    fiveStarsMovie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    const that = this;

    // 获取图书二级分类
    wx.request({
      url: app.globalData.myApi + 'getBookClass.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)
        that.setData({
          bookClass: res.data
        })
      }
    })
    // 畅销书排行榜top3
    this.hotSaleTop3()
    // 9.9包邮
    this.nine9()

    // 五星图书第一名
    this.fiveStar('book')

    // 五星音乐第一名
    this.fiveStar('music')

    // 流行音乐TOP6
    this.musicTop6()
  },

  /**
   * 跳转到电影列表页
   */
  goToMovieList: function() {

    wx.navigateTo({
      url: '../list_movie/list_movie',
    })

  },

  // 跳转到图书列表页
  goToBookList(e) {

    // console.log(e);
    // 获取id参数
    let id = e.currentTarget.id;

    let tag = e.currentTarget.dataset.tag;

    // 跳转到图书列表页
    wx.navigateTo({
      url: '../list_book/list_book?cid=' + id + '&tag=' + tag,
    })
  },
  // 跳转到音乐列表
  goToMusicList() {
    wx.navigateTo({
      url: '../list_music/list_music',
    })
  },
  onShow() {
    let nums = helper.getCartCount()
    // 设置tabbar 的数量
    wx.setTabBarBadge({
      index: 2,
      text: nums.toString()
    })
  },
  // 畅销书排行榜top3
  hotSaleTop3() {
    const that = this;

    wx.request({
      url: app.globalData.myApi + 'getBookDataList.php', //仅为示例，并非真实的接口地址
      data: {
        cid: 789,
        limit: 3
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)
        if (res.data != null) {
          that.setData({
            hotSaleTop3: res.data
          })
        }

      }
    })
  },
  // 9.9包邮
  nine9() {
    const that = this;

    wx.request({
      url: app.globalData.myApi + 'getBookDataList.php', //仅为示例，并非真实的接口地址
      data: {
        cid: 99,
        limit: 3
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)
        if (res.data != null) {
          that.setData({
            nine9: res.data
          })
        }

      }
    })
  },
  fiveStar(bmm) {
    const that = this;

    wx.request({
      url: app.globalData.myApi + 'fiveStars.php', //仅为示例，并非真实的接口地址
      data: {
        bmm: bmm
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data != null) {
          if (bmm == 'book') {
            that.setData({
              fiveStarsBook: res.data
            })
          } else if (bmm == 'music') {
            that.setData({
              fiveStarsMusic: res.data
            })
          } else if (bmm == 'movie') {
            that.setData({
              fiveStarsMovie: res.data
            })
          }
        }

      }
    })
  },
  // 流行音乐
  musicTop6() {
    const that = this
    wx.request({
      url: app.globalData.myApi + 'getMusicList.php', //仅为示例，并非真实的接口地址
      data: {
        cid: 888,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data != null) {
          that.setData({
            musicTop6: res.data
          })
        }
      }
    })
  },
  goToSearch() {
    wx.navigateTo({
      url: '../search/search?source=' + '',
    })
  }
})