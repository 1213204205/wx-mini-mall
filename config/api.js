const request = require('../utils/request')
const mockHost = 'https://www.easy-mock.com/mock/5d397aaf3072674945e0caca/'

export const getGoodList = data => { return request(mockHost + 'xiaomi/goodList', data) }
export const getCategroy = data => { return request(mockHost + 'xiaomi/category', data) }
export const getGoodDetail = data => { return request(mockHost + 'xiaomi/goodDetail', data) }
