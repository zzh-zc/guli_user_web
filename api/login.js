import request from '@/utils/request'
export default {
  // 登录
  submitLogin(userInfo) {
    return request({
      url: `/ucenter/user/login`,
      method: 'post',
      data: userInfo
    })
  },
  // 根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `/ucenter/user/auth/getLoginInfo`,
      method: 'get'
    })
  }
}
