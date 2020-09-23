// miniprogram/pages/index/index.js
const api = require('../../config/api')
Page({

  data: {
    imgUrls: [
      '../../images/banner/1.jpg',
      '../../images/banner/2.jpg',
      '../../images/banner/3.jpg'
    ],
    menu: [{
        icon: '../../images/手机 (1).png',
        text: '手机'
      }, {
        icon: '../../images/电视.png',
        text: '电视'
      }, {
        icon: '../../images/电脑.png',
        text: '电脑'
      }, {
        icon: '../../images/智能场控.png',
        text: '智能'
      }, {
        icon: '../../images/家电.png',
        text: '家电'
      }
    ],
    goodList: [],
    first: {},
  },

  onLoad: function(options) {
    this.getGoodList()
  },
  getGoodList() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    api
      .getGoodList()
      .then(res => {
        wx.hideLoading()
        this.setData({
          first: res.data.one,
          goodList: res.data.section
        })
      })
      .catch(err => {
        wx.hideLoading()
        wx.showToast({
          title: err.errMsg,
          icon: 'none'
        })
      })
  },
  goDetails(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/shopDetail/shopDetail?id=${id}`,
    });
  }
})