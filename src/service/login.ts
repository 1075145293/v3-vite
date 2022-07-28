import request from './request'
export function login (parameter: any) {
  return request({
    url: '/login',
    method: 'get',
    params: parameter
  })
}
