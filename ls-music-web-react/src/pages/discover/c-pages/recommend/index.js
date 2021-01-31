import React, { memo, useEffect } from 'react'
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreator'


function LSRecommend(props) {
  // const { getRecommendBanners, topBanners } = props;

  // useEffect(() => {
  //   getRecommendBanners()
  // }, [getRecommendBanners]);
  // (left: { lunBoTuList: any; }, right: { lunBoTuList: any; }) => boolean)
  const { lunBoTuList } = useSelector(state => ({
    lunBoTuList: state.recommend.topBanners
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>LSRecommend: {lunBoTuList.length}</h2>
      {
        lunBoTuList.map(item => {
          return (
            <div key={item.imageUrl}>
              <h3 style={{ color: `${item.titleColor}`, paddingTop: '20px' }}>{item.typeTitle}</h3>
              <img src={item.imageUrl} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}
export default memo(LSRecommend)

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getRecommendBanners: () => ({
//     getBanners: dispatch(getTopBannerAction())
//   })
// })


// export default connect(mapStateToProps, mapDispatchToProps)(memo(LSRecommend));


