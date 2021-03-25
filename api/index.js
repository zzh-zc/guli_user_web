import request from '../utils/request'

export default {
  getList() {
    return request({
      url: '/eduservice/front/index',
      method: 'get'
    })
  }
}
