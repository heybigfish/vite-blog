/**
 * 生成基础axios对象，并对请求和响应做处理
 * 前后端约定接口返回解构规范
 * {
 *    code:0,
 *    data:"成功",
 *    message:""
 * }
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建一个独立的axios实例
const service: any = axios.create({
  // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
  baseURL: '/gateway/tempo-talents',
  // 定义统一的请求头部
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  // 配置请求超时时间
  timeout: 10000,
  // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
  withCredentials: true
})
// 请求拦截
service.interceptors.request.use((config: any) => {
  // 自定义header，可添加项目token
  config.headers.token = 'token'
  return config
})
// 返回拦截
service.interceptors.response.use(
  (response: any) => {
    // 获取接口返回结果
    const res = response.data
    // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
    if (res.status === 1) {
      console.log('🚀 ~ file: interceptor.ts ~ line 37 ~ res', res)
      return res
    } else if (res.status === 10000) {
      // 10000假设是未登录状态码
      ElMessage.warning(res.message)
      // 也可使用router进行跳转
      window.location.href = '/#/login'
      return res
    } else {
      // 错误显示可在service中控制，因为某些场景我们不想要展示错误
      // ElMessage.error(res.message);
      return res
    }
  },
  () => {
    ElMessage.error('网络请求异常，请稍后重试!')
  }
)
export default service
