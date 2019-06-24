// pages/order/order.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    receiver:'',
    mobile:'',
    address:'',
    poster:[],
    myhost: app.globalData.myhost
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 判断该用户是否已经注册过,如果没有则跳转到注册页面
    this.checkUserRegister();
  },
  // 判断用户是否注册
  checkUserRegister() {
    let openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.myApi + 'getUserInfo.php', //仅为示例，并非真实的接口地址
      data: {
        openid: openid,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)

        if (res.data === 'no') { //无此用户，则提醒并跳转到完善信息页面
          wx.showToast({
            title: '您还未注册！',
            image: '../../static/icon/alert.png',
            duration: 2000,
            success() {
              console.log(2222);
              setTimeout(() => {
                wx.navigateTo({
                  url: '../my_info/my_info?form_=order',
                })
              }, 2000)

            }
          })
        } else {

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
    const that=this
    // 获取用户的信息
    let openid=wx.getStorageSync('openid')

    // 请求数据
    wx.request({
      url: app.globalData.myApi+'getUserInfo.php', 
      data: {
        openid:openid,
        tag: 'data'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)
        that.setData({
          receiver: res.data.user_name,
          mobile: res.data.user_moblie,
          address: res.data.user_address
        })
      }
    })
    // 读取购物车的内容
    let cartDatas=wx.getStorageSync(openid);

    //临时数组
    var tempArr=[] 

    var price=0

    // 图书的数据
    for (let i = 0; i < cartDatas.book.length; i++) {
      tempArr.push(cartDatas.book[i].poster);
      price += cartDatas.book[i].count * cartDatas.book[i].price
    }
    for (let i = 0; i < cartDatas.music.length; i++) {
      tempArr.push(cartDatas.music[i].poster);
      price += cartDatas.music[i].count * cartDatas.music[i].price
    }
    for (let i = 0; i < cartDatas.movie.length; i++) {
      tempArr.push(cartDatas.movie[i].poster);
      price += cartDatas.movie[i].count * cartDatas.movie[i].price
    }
    price=price.toFixed(2);

    let postFree=12
    
    // 渲染
    this.setData({
      poster:tempArr,
      price:price,
      postPrice: (parseFloat(price)+postFree).toFixed(2)
    })
  },
  createOrder(){

    let openid = wx.getStorageSync('openid')

    // 读取购物车的内容
    let cartDatas = wx.getStorageSync(openid);

    // cartDatas=cartDatas.book;
    let cartDatasString=JSON.stringify(cartDatas);

    // 网络请求
    wx.request({
      url: app.globalData.myApi+'creatOrder.php', //仅为示例，并非真实的接口地址
      data: {
        datas: cartDatasString,
        openid:openid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if(res.data==='ok'){
          wx.showToast({
            title: '创建订单成功',
            icon:'success',
            duration: 2000,
            success() {

              wx.removeStorage({
                key: openid,
                success(res) {
                  console.log(res)
                }
              })

              setTimeout(() => {

                wx.switchTab({
                  url: '../my/my',
                })
              }, 2000)

            }
          })
        }else{
          wx.showToast({
            title: '创建订单失败',
            icon: 'none',
            duration: 2000,
            success() {

            }
          })
        }
      }
    })

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