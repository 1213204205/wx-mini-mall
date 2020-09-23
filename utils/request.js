const request = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data,
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      }
    })
  });
}

module.exports = request