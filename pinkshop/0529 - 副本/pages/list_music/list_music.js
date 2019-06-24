
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host:app.globalData.host,
    myhost: app.globalData.myhost,
    classList:[],
    musicList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //获取音乐分类数据
    this.getMusicClass();

    //获取主体数据
    this.getMusicList();

  },
  /**
   * 音乐分类
   */
  getMusicClass:function(currentId=''){

    //that
    var that = this;

    wx.request({
      url: app.globalData.myApi+'getMusicClass.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        
        let datas = res.data;
        let tempArr = [];

        if (datas.length>0){

          if (currentId){

            for (let i = 0; i < datas.length; i++) {

              if (datas[i].id == currentId){
                datas[i].active = 'active';
              }

              tempArr.push(datas[i]);

            }

            //重置数据
            that.setData({
              classList: tempArr
            })

          } else {

            //重置数据
            that.setData({
              classList: datas
            })

          }
         
          
        }

      }
    })

  },
  /**
   * 读取二级分类数据
   */
  getMusicBy:function(e){

    //获取当前所点击的分类
    let currentId = e.currentTarget.id

    //重置分类
    this.getMusicClass(currentId)

    //加载该分类数据
    this.getMusicList(currentId)

  },
  /**
   * 音乐列表
   */
  getMusicList:function(cid=''){

    var that = this;

    wx.request({
      url: app.globalData.myApi+'getMusicList.php', //仅为示例，并非真实的接口地址
      data: {
        cid: cid,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          musicList: res.data
        })
      }
    })

  },
  /**
   * 跳转到音乐详情页
   */
  goToMusicDetail:function(e){

    //获取ID
    let id = e.currentTarget.id;
    
    //页面跳转
    wx.navigateTo({
      url: '../detail_music/detail_music?id='+id,
    })

  },
  search(){

    wx.navigateTo({
      url: '../search/search?source=' + 'music',
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