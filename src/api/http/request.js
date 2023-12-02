// 封装请求参数
import { http } from './http.js'

function request({
  method = 'get', //请求方式
  url, //请求的url
  data = {}, //载荷
  params = {}, //参数
}) {
  return http({
    method,
    url,
    data,
    params,
  })
}

export default request
