import request from '../utils/request'
export default {
  getListBanner() {
    return request({
      url: '/educms/banner/getAllBanner',
      method: 'get'
    })
  }
}
