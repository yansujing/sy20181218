// components/stars/stars.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nums: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    host: app.globalData.host,
    imgUrls: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 生命周期函数
  lifetimes: {
    attached: function() {
      // console.log('star')
      // 在组件实例进入页面节点树时执行
      // console.log(this.data.nums)
      const num = this.data.nums

      // 定义一个空数组
      const tampArr = []

      // 循环输出五个星星
      for (let i = 0; i < 5; i++) {
        if (i < num) {
          tampArr.push(this.data.host + 'source/static/ico/star.png')
        }else{
          tampArr.push(this.data.host + 'source/static/ico/star-gray.png')
        }

      }
      // console.log(tampArr)
      this.setData({
        imgUrls: tampArr
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})