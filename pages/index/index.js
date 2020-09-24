// miniprogram/pages/index/index.js
const api = require('../../config/api')
Page({

  data: {
    imgUrls: [
      '../../images/banner/1.jpg',
      '../../images/banner/2.jpg',
      '../../images/banner/3.jpg',
      '../../images/banner/4.jpg',
      '../../images/banner/5.jpg'
    ],
    menu: [{
      icon: '../../images/nav/phone.png',
      text: '手机'
    }, {
      icon: '../../images/nav/tv.png',
      text: '电视'
    }, {
      icon: '../../images/nav/computer.png',
      text: '电脑'
    }, {
      icon: '../../images/nav/router.png',
      text: '智能'
    }, {
      icon: '../../images/nav/news.png',
      text: '新品'
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