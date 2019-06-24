// pages/list_book/list_book.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host,
    myhost: app.globalData.myhost,
    hasData: true,
    page: 1,
    ninePage: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    // 加载中。。。
    wx.showLoading({
      title: '加载中',
    })

    const that = this;

    // 接收分类参数
    // console.log(options.tag);
    let cid = options.cid;
    this.cid = options.cid;

    let tag = options.tag;

    // 根据tag来分配active样式
    switch (tag) {
      case '科学技术':
        this.setData({
          active_tec: 'active'
        })
        wx.setNavigationBarTitle({
          title: '科学技术'
        })
        break;
      case '儿童图书':
        this.setData({
          active_child: 'active'
        })
        wx.setNavigationBarTitle({
          title: '儿童图书'
        })
        break;
      case '儿童图书':
        this.setData({
          active_culture: 'active'
        })
        wx.setNavigationBarTitle({
          title: '儿童图书'
        })
        break;
      case '儿童图书':
        this.setData({
          active_people: 'active'
        })
        wx.setNavigationBarTitle({
          title: '儿童图书'
        })
        break;
      case '健康养生':
        this.setData({
          active_health: 'active'
        })
        wx.setNavigationBarTitle({
          title: '健康养生'
        })
        break;
      case '9.9包邮':
        this.setData({
          active_99: 'active'
        })
        wx.setNavigationBarTitle({
          title: '9.9包邮'
        })
        break;
      case 'hotsale':
        this.setData({
          active_hotsale: 'active'
        })
        wx.setNavigationBarTitle({
          title: '热销图书'
        })
        break;
      case 'newbook':
        this.setData({
          active_newbook: 'active'
        })
        wx.setNavigationBarTitle({
          title: '新书上架'
        })
        break;
      default:
        wx.setNavigationBarTitle({
          title: '图书分类'
        })
    }

    // console.log(this);

    // 获取该分类的数据

    if (options.sBy && options.sValue) {

      // 根据相关信息查找数据
      this.getDataListBy(options.sBy, options.sValue);

    } else {

      this.getDataList();
    }


    // 根据分类ID获取数据
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

        // 隐藏加载。。。
        wx.hideLoading({})
      }
    })
  },
  // 根据相关信息获取数据
  getDataListBy(sb, sv) {
    // console.log(sb, sv)
    if (sb && sv) {
      const that = this;
      wx.request({
        url: app.globalData.myApi + 'getBookDataListBy.php', //仅为示例，并非真实的接口地址
        data: {
          sb: sb,
          sv: sv
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
          // if (res.data) {
          //   // 停止下拉刷新
          //   wx.stopPullDownRefresh()

          //   that.setData({
          //     dataList: res.data
          //   })
          // } else {
          //   that.setData({
          //     hasData: false
          //   })
          // }

        }
      })
    }
  },
  // 获取该分类的数据
  getDataList() {
    const that = this;
    wx.request({
      url: app.globalData.myApi + 'getBookDataList.php', //仅为示例，并非真实的接口地址
      data: {
        cid: that.cid,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)
        if (res.data) {

          // 停止下拉刷新
          wx.stopPullDownRefresh()
          that.setData({
            dataList: res.data
          })
        } else {
          that.setData({
            hasData: false
          })
        }

      }
    })
  },
  // 跳转到图书详情页面
  goToBookDetail(e) {
    console.log(e);
    // 获取图书ID
    let pid = e.currentTarget.id;
    // console.log(pid)

    // 获取分类id
    let mcid = e.currentTarget.dataset.mcid

    console.log(mcid)
    // 跳转到详情页
    wx.navigateTo({
      url: '../detail_book/detail_book?id=' + pid + '&mcid=' + mcid,
    })
  },
  search() {
    console.log(333);
  },
  // 跳转到图书列表页
  goToBookList(e) {

    console.log(e);
    // 获取id参数
    let id = e.currentTarget.id;

    let tag = e.currentTarget.dataset.tag;

    // 跳转到图书列表页
    wx.navigateTo({
      url: './list_book?cid=' + id + '&tag=' + tag,
    })
  },
  search(){
    wx.navigateTo({
      url: '../search/search?source=' + 'book',
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
    this.getDataList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

    const that = this;
    // console.log(that);

    // 获取该分类的数据
    wx.request({
      url: app.globalData.myApi + 'getBookDataList.php', //仅为示例，并非真实的接口地址
      data: {
        cid: that.cid,
        page: ++that.data.page
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(that.data.page)
        // console.log(res.data)
        // console.log(Array.isArray(res.data))
        // 获取之前的数据
        // console.log(allData)

        if (res.data == null) {
          wx.showToast({
            title: '没有数据了',
            icon: 'none',
            duration: 2000
          })
        } else {
          const allData = that.data.dataList.concat(res.data);
          that.setData({
            dataList: allData
          })
        }

      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})