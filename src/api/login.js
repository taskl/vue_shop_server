import request from '../utils/request'
export function getLogin(params) {
    return request({
        url: '/auth/login',
        method: 'post',
        data: params
    })
}