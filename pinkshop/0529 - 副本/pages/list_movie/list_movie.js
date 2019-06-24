
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host:app.globalData.host,
    myhost:app.globalData.myhost,
    movieTypes:[],
    movieCountry:[],
    isTypeALL:'active',
    isCountryALL:'active',
    movieDatas:[],
    currentSelectedType:999,
    currentSelectedCountry:888
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //获取类型
    this.getMovieType();

    //获取国家
    this.getMovieCountry();

    //读取数据
    this.getMovieDatas();

  },
  goToMovie(e){
    console.log(e);
    const id = e.currentTarget.id;
    wx.navigateTo({
      url: '../detail_movie/detail_movie?id=' + id,
    })


  },
  /**
   * 获取电影数据
   */
  getMovieDatas:function(type=999,country=888){

    var that = this;

    wx.request({
      url: app.globalData.myApi +'getMovieDatas.php', //仅为示例，并非真实的接口地址
      data: {
        type: type,
        country: country
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        that.setData({
          movieDatas:res.data
        })

      }
    })

  },
  /**
   * 获取电影分类（类型）
   */
  getMovieType:function(cid=''){

    //that
    var that = this;

    wx.request({
      url: app.globalData.myApi+'getMovieClass.php', //仅为示例，并非真实的接口地址
      data: {
        tag: 'type',
        cid: cid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
console.log(res.data)
        that.setData({
          movieTypes: res.data
        })
      }
    })

  },
  /**
   * 获取电影分类（国家）
   */
  getMovieCountry:function(cid=''){

    //that
    var that = this;

    wx.request({
      url: app.globalData.myApi + 'getMovieClass.php', //仅为示例，并非真实的接口地址
      data: {
        tag: 'country',
        cid: cid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {

        that.setData({
          movieCountry: res.data
        })
      }
    })


  },
  /**
   * 按照类型显示样式
   */
  showByType:function(e){

    //获取分类ID
    let cid = e.currentTarget.id;
    
    //如果不是选择的全部，则取消它的样式
    if (cid != 999){
      this.setData({
        isTypeALL:''
      })
    } else {
      this.setData({
        isTypeALL: 'active'
      })
    }

    //重置currentSelectedType的值
    this.setData({
      currentSelectedType:cid
    })


    //重置类型
    this.getMovieType(cid);

    //重新获取列表数据
    this.getMovieDatas(this.data.currentSelectedType, this.data.currentSelectedCountry)

  },
  /**
   * 按照国家显示样式
   */
  showByCountry:function(e){


    //获取分类ID
    let cid = e.currentTarget.id;

    //如果不是选择的全部，则取消它的样式
    if (cid != 888) {
      this.setData({
        isCountryALL: ''
      })
    } else {
      this.setData({
        isCountryALL: 'active'
      })
    }

    //重置currentSelectedCountry值
    this.setData({
      currentSelectedCountry: cid
    })

    //重置类型
    this.getMovieCountry(cid);

    //重新获取列表数据
    this.getMovieDatas(this.data.currentSelectedType, this.data.currentSelectedCountry)

  },
  search() {

    wx.navigateTo({
      url: '../search/search?source=' + 'movie',
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})