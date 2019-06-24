var openid = wx.getStorageSync('openid')
var cartDatas = wx.getStorageSync(openid)

module.exports = {
  getCartDatasCounts() {
    var openid = wx.getStorageSync('openid')
    return wx.getStorageSync(openid)
  },
  // 加入购物车
  addToCart(pid, bmm = '', that_, app, go = 'go') {
    // 获取OPENID
    var openid = wx.getStorageSync('openid');

    // 创建购物车数据结构

    // 判断购物车中是否存在产品
    if (openid) {

      // 获取购物车的数据
      var cartDatas = wx.getStorageSync(openid);

      var pInfo = {
        "id": parseInt(pid),
        "count": 1,
        "pname": "",
        "price": 25.25,
        "poster": "",
        "mcid": "",
        "scid": ""
      }
      var that = this
      // 网络请求
      wx.request({
        url: app.globalData.myApi + 'getProductForCart.php', //仅为示例，并非真实的接口地址
        data: {
          bmm: bmm,
          pid: parseInt(pid)
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res);
          var cartDatas = wx.getStorageSync(openid);
          pInfo = {
            "id": parseInt(pid),
            "count": 1,
            "pname": res.data.pname,
            "price": res.data.price,
            "poster": res.data.poster,
            "mcid": res.data.mcid,
            "scid": res.data.scid
          }
          if (!cartDatas) { //从未购买过任何产品
            var cartDatas = {
              "book": [],
              "music": [],
              "movie": []
            }
            switch (bmm) {
              case 'book':
                cartDatas.book.push(pInfo)
                break;
              case 'music':
                cartDatas.music.push(pInfo)
                break;
              case 'movie':
                cartDatas.movie.push(pInfo)
                break;
            }
          } else {

            if (bmm === 'book') {
              // 如果图书中没有任何产品时
              if (cartDatas.book.length < 1) {
                cartDatas.book.push(pInfo)
              } else {
                var isHas = false;

                for (let i = 0; i < cartDatas.book.length; i++) {
                  // console.log(i)
                  if (pid == cartDatas.book[i].id) {
                    isHas = true;
                    cartDatas.book[i].count++;
                  }
                }

                // 表示当前图书购物车已经存在该产品，则数量+1
                if (!isHas) {
                  cartDatas.book.push(pInfo)
                }

              }

            } else if (bmm === 'music') {

              // 如果图书中没有任何产品时
              if (cartDatas.music.length < 1) {
                cartDatas.music.push(pInfo)
              } else {

                let isHas = false;
                for (let i = 0; i < cartDatas.music.length; i++) {
                  if (pid == cartDatas.music[i].id) {
                    isHas = true;
                    cartDatas.music[i].count++;
                  }
                }

                // 表示当前图书购物车已经存在该产品，则数量+1
                if (!isHas) {
                  cartDatas.music.push(pInfo)
                }

              }

            } else if (bmm === 'movie') {

              // 如果图书中没有任何产品时
              if (cartDatas.movie.length < 1) {
                cartDatas.movie.push(pInfo)
              } else {

                let isHas = false;
                for (let i = 0; i < cartDatas.movie.length; i++) {
                  if (pid == cartDatas.movie[i].id) {
                    isHas = true;
                    cartDatas.movie[i].count++;
                  }
                }

                // 表示当前图书购物车已经存在该产品，则数量+1
                if (!isHas) {
                  cartDatas.movie.push(pInfo)
                }

              }

            }
          }
          wx.setStorageSync(openid, cartDatas)

         
          if (go == 'goToOrder') {   // 立即购买

            wx.navigateTo({
              url: '../order/order',
            })

          } else {  //  加入购物车

            wx.showToast({
              title: '已加入购物车',
              icon: 'success',
              duration: 2000
            })

          }


          var mums = that.getCartCount();
          that_.setData({
            currentCartCount: mums
          })


        }
      })



    }
  },

  getCartCount() {

    var openid = wx.getStorageSync('openid');

    var cartDatas = wx.getStorageSync(openid);

    var total = 0;

    if (cartDatas) {
      for (let i = 0; i < cartDatas.book.length; i++) {
        total += cartDatas.book[i].count;
      }
      for (let i = 0; i < cartDatas.music.length; i++) {
        total += cartDatas.music[i].count;
      }
      for (let i = 0; i < cartDatas.movie.length; i++) {
        total += cartDatas.movie[i].count;
      }
    }

    return total;
  },
  getCartDatas(par) {
    let nums = this.getCartCount()
    // 设置tabbar 的数量
    wx.setTabBarBadge({
      index: 2,
      text: nums.toString()
    })

    let openid = wx.getStorageSync('openid')

    // 获取购物车的数据
    var cartDatas = wx.getStorageSync(openid);
    console.log(cartDatas)
    let numst = this.getCartCount()
    console.log(numst)
    if (numst > 0) {
      par.setData({
        hasData: false,
        cartDatas: cartDatas
      })
    }
    if (numst == 0) {
      par.setData({
        hasData: true
      })
    }
    // console.log(par)
  },
  add(type, index) {
    var openid = wx.getStorageSync('openid')
    var cartDatas = wx.getStorageSync(openid)
    if (type === 'book') {
      cartDatas.book[index].count++;
    } else if (type === 'music') {
      cartDatas.music[index].count++;
    } else if (type === 'movie') {
      cartDatas.movie[index].count++;
    }
    wx.setStorageSync(openid, cartDatas)
  },
  sub(type, index, that_ = '') {
    const that = this
    var openid = wx.getStorageSync('openid')
    var cartDatas = wx.getStorageSync(openid)
    if (type === 'book') {
      if (cartDatas.book[index].count <= 1) {
        wx.showModal({
          title: '提示',
          content: '您要删除吗？',
          success(res) {
            if (res.confirm) {
              // 执行删除的方法
              that.remove(type, index, that_)
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      } else {
        cartDatas.book[index].count--;
        // console.log(cartDatas.book[index].count);
      }
    } else if (type === 'music') {
      if (cartDatas.music[index].count <= 1) {
        wx.showModal({
          title: '提示',
          content: '您要删除吗？',
          success(res) {
            if (res.confirm) {
              // 执行删除的方法
              that.remove(type, index, that_)
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      } else {
        cartDatas.music[index].count--;
      }
    } else if (type === 'movie') {
      if (cartDatas.movie[index].count <= 1) {
        wx.showModal({
          title: '提示',
          content: '您要删除吗？',
          success(res) {
            if (res.confirm) {
              // 执行删除的方法
              that.remove(type, index, that_)
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      } else {
        cartDatas.mmovieusic[index].count--;
      }
    }
    wx.setStorageSync(openid, cartDatas)
    this.getCartDatas(that_)
    that_.countTotalPrice()
  },
  remove(type, index, that_) {
    console.log(type, index)
    var openid = wx.getStorageSync('openid')
    var cartDatas = wx.getStorageSync(openid)
    if (type === 'book') {
      cartDatas.book.splice(index, 1);
    } else if (type === 'music') {
      cartDatas.music.splice(index, 1);
    } else if (type === 'movie') {
      cartDatas.movie.splice(index, 1);
    }
    console.log(cartDatas)
    wx.setStorageSync(openid, cartDatas)
    // console.log(that_)
    this.getCartDatas(that_)
    that_.countTotalPrice()
  },
  del(type, index, that) {
    console.log(type, index)
    const that_ = this;
    // 删除询问
    wx.showModal({
      title: '提示',
      content: '您要删除吗？',
      success(res) {
        if (res.confirm) {
          // 执行删除的方法
          that_.remove(type, index, that)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
}