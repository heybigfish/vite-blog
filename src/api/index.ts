/**
 * index.js
 * api地址管理
 */
import request from './request'
export default {
  login: (params: any) => {
    return request.post('/api/tt-common/dic', params)
  }
  // getInfo: (params: any) => {
  //   return request.get('/login', params)
  // }
}
