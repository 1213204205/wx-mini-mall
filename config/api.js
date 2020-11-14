const request = require('../utils/request')
const mockHost = ' https://www.easy-mock.com/mock/5fae7a4a90e2202de96cd1af/mall'

export const getGoodList = data => { return request(mockHost + '/goodList', data) }
export const getCategroy = data => { return request(mockHost + '/category', data) }
export const getGoodDetail = data => { return request(mockHost + '/goodDetail', data) }
