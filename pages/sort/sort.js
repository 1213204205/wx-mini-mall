// miniprogram/pages/category/category.js
const api = require('../../config/api')
Page({
  data: {
    categroy: [],
    curIndex: 'A', 
    toView: 'A',    
    heightArr: [],
    endActive: 'A'
  },
  onLoad: function (options) {
    this.getCategroy()
  },
  getCategroy() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    api
      .getCategroy()
      .then(res => {
        wx.hideLoading()
        this.setData({
          categroy: res.data
        })
        // 只有等页面数据渲染完成了，才能开始计算页面信息
        this.getPageMessage()
      })
      .catch(err => {
        wx.hideLoading()
        wx.showToast({
          title: err.errMsg,
          icon: 'none'
        })
      })
  },
  // 点击左边标签要修改的信息
  switchTab(e) {
    console.log(e.target.dataset.index)
    this.setData({
      curIndex: e.target.dataset.index,
      toView: e.target.dataset.index
    })
  },
  // 判断curIndex应该是那个
  getCurrentIndex(scrollTop) {
    const scrollArr = this.data.heightArr
    let find = scrollArr.findIndex(item => {
      // 提前120rpx触发效果
      return scrollTop < item - 120
    })
    console.log(find)
    let curChar = String.fromCharCode(65 + find)
    return curChar
  },
  // 页面滑动到底部触发
  scrollEnd() {
    const scrollArr = this.data.heightArr
    const length = scrollArr.length - 1
    let endChar = String.fromCharCode(65 + length)
    this.setData({
      curIndex: endChar,
      endActive: endChar
    })
  },
  // 页面滑动时触发
  scrollContent(e) {
    const scrollTop = e.detail.scrollTop
    const scrollArr = this.data.heightArr
    const length = scrollArr.length - 1
    let endChar = String.fromCharCode(65 + length)
    let curChar = this.getCurrentIndex(scrollTop)
    if (this.data.endActive != endChar) {
      this.setData({
        curIndex: curChar
      })
    } else {
      this.setData({
        endActive: 'A'
      })
    }
  },
  getPageMessage() {
    let self = this
    let heightArr = []
    let h = 0
    const query = wx.createSelectorQuery()
    query.selectAll('.right-list').boundingClientRect()
    query.exec(res => {
      res[0].forEach(item => {
        h += item.height
        heightArr.push(h)
      })
      self.setData({
        heightArr: heightArr
      })
    })
  },

})