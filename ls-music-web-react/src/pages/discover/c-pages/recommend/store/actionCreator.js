import * as actinoTypes from './constants'

import { getTopBanners } from '@service/recommend'

const changeTopBanners = res => ({
  type: actinoTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})



export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBanners(res))
    })
  }
}
