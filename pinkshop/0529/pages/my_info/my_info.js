const app = getApp();

// pages/my_info/my_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    tempFilePaths: [''],
    myname: '',
    tel: '',
    address: '',
    post: '',
    myheader: '',
    isReg: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    const that = this
    this.form_ = options.form_
    // 获取用户信息
    let openid = wx.getStorageSync('openid');
    // 读取用户信息
    wx.request({
      url: app.globalData.myApi + 'getUserInfo.php', //仅为示例，并非真实的接口地址
      data: {
        openid: openid,
        tag: 'xxx'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data) {
          that.setData({
            myname: res.data.user_name,
            tel: res.data.user_moblie,
            address: res.data.user_address,
            post: res.data.user_post,
            myheader: app.globalData.myhost + res.data.user_header,
            isReg: false
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
  // 获取本地位置
  getLocation() {
    const that = this
    console.log(4)
    wx.chooseLocation({
      success(res) {
        console.log(res)
        that.setData({
          address: res.name
        })
      }
    })
  },
  // 上传头像
  upload() {
    const that = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.setData({
          tempFilePaths: tempFilePaths
        })
      }
    })
  },
  // 表单提交

  formSubmit(e) {
    console.log(e)
    const that = this

    let name = e.detail.value.name;
    let tel = e.detail.value.tel;
    let address = e.detail.value.address;
    let poster = e.detail.value.poster

    //openid
    let openid = wx.getStorageSync('openid')


    if (that.data.tempFilePaths[0].length > 0) {
      wx.uploadFile({
        url: app.globalData.myApi + 'userRegister.php', //仅为示例，非真实的接口地址
        filePath: that.data.tempFilePaths[0],
        name: 'file',
        formData: {
          'name': name,
          'tel': tel,
          'address': address,
          'poster': poster,
          'openid': openid,
          'isReg': that.data.isReg ? 1 : 0
        },
        success(res) {
          const data = res.data
          console.log(data)
          if (data === 'ok') {
            wx.showToast({
              title: that.data.isReg ? '注册成功' : '修改成功',
              icon: 'success',
              duration: 2000
            })
            if (that.form_ === 'order') {
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1
                })
              }, 2000)
            }
          } else if (data === 'fail') {
            wx.showToast({
              title: '注册失败',
              icon: 'none',
              duration: 2000
            })
          } else {
            console.log(data)
          }

          //do something
        }
      })
    }else{

      wx.request({
        url: app.globalData.myApi + 'userRegister.php', //仅为示例，并非真实的接口地址
        data: {
          'name': name,
          'tel': tel,
          'address': address,
          'poster': poster,
          'openid': openid,
          'isReg': that.data.isReg ? 1 : 0
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          const data = res.data
          console.log(data)
          if (data === 'ok') {
            wx.showToast({
              title: that.data.isReg ? '注册成功' : '修改成功',
              icon: 'success',
              duration: 2000
            })
            if (that.form_ === 'order') {
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1
                })
              }, 2000)
            }
          } else if (data === 'fail') {
            wx.showToast({
              title: '注册失败',
              icon: 'none',
              duration: 2000
            })
          } else {
            console.log(data)
          }
        }
      })

    }


  }

})