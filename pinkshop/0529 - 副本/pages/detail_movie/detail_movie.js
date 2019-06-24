// pages/detail_movie/detail_movie.js
//引入全局APP
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.id=options.id;
    console.log(this.id)
    this.getMovieData();
  },

  getMovieData(){

    var that=this;
    wx.request({
      url: app.globalData.myApi+'getMovieDetail.php', //仅为示例，并非真实的接口地址
      data: {
        id:that.id,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        wx.setNavigationBarTitle({
          title: res.data.movie_name
        })
        that.setData({
          movieDatas:res.data
        })

        that.VideoContext = wx.createVideoContext('myVideo')
      }
    })
  },
  play(){

    this.VideoContext.play()
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