import request from './axios'

export const getTopBanners = () => {
  return request({ url: '/banner' })
}