import request from '@/network/request/request.js'

export const getHomeDataAPI = () => {
    return request.get('/home/multidata', {

    })
}