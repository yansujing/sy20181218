
const app = getApp();
import helper from '../../utils/helper.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host:app.globalData.host,
    myhost:app.globalData.myhost,
    nodes:'<p>分割电饭锅电饭锅分割</p><p>法国代购的非官方</p>',
    musicDetail:{},
    isPlay:false,
    leftMinutes:'00',
    leftSeconds:'00'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //产品ID
    this.pid = options.id

    //读取该产品的详细数据
    this.getMusicDetailById();

    let nums = helper.getCartCount();
    this.setData({
      currentCartCount: nums
    })

  },
  /**
   * 根据ID获取详情
   */
  getMusicDetailById:function(){

    //that
    var that = this;

    wx.request({
      url: app.globalData.myApi+'getMusicDetail.php', //仅为示例，并非真实的接口地址
      data: {
        pid: that.pid,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          musicDetail: res.data
        })

        //创建音频对象
        that.InnerAudioContext = wx.createInnerAudioContext();

        //音频资源的地址
        that.InnerAudioContext.src = res.data.music_url;

        //是否自动播放
        that.InnerAudioContext.autoplay = false;

      }
    })

  },
  /**
   * 播放音乐
   */
  play:function(){

    //that
    var that = this;

    //播放
    this.InnerAudioContext.play();

    //改变播放状态
    this.setData({
      isPlay:true
    })

    //剩余时间
    var clock = setInterval(()=>{

      //当前音频的长度
      let duration = parseInt(this.InnerAudioContext.duration);


      //当前音频的播放位置
      let currentTime = parseInt(this.InnerAudioContext.currentTime);

      //剩余总秒
      let leftTime = duration - currentTime;

      //剩余分钟
      let leftMinutes = Math.floor(leftTime/60);

      //剩余秒
      let leftSeconds = leftTime % 60;

      //前缀加0
      if (leftMinutes<10){
        leftMinutes = '0' + leftMinutes;
      }

      if (leftSeconds<10){
        leftSeconds = '0' + leftSeconds;
      }

      // console.log(leftMinutes, leftSeconds);

      this.setData({
        leftMinutes: leftMinutes,
        leftSeconds: leftSeconds
      })


    },1000);

    //监听自然播放结束
    this.InnerAudioContext.onEnded(function(){
      console.log('end');

      //清除定时器
      clearInterval(clock);

      //改变播放状态
      that.setData({
        isPlay:false,
        leftMinutes:'00',
        leftSeconds:'00'
      })

    })

  },
  /**
   * 暂停音乐
   */
  pause:function(){

    //暂停
    this.InnerAudioContext.pause();

    //改变播放状态
    this.setData({
      isPlay: false
    })

  },
  /**
   * 停止播放
   */
  stop:function(){

    //停止
    this.InnerAudioContext.stop();

    //改变播放状态
    this.setData({
      isPlay: false
    })

  },
  goToHome() {
    wx.switchTab({
      url: '../home/home',
    })

  },
  goToCart() {

    wx.switchTab({
      url: '../cart/cart',
    })
  },
  // 加入购物车
  addToCart() {

    let pid = this.pid;

    helper.addToCart(pid, 'music', this, app)

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