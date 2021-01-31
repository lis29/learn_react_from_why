import { changeTopBannerAction } from "./actionCreator";
import * as actinoTypes from "./constants";

const initalState = {
  topBanners: []
}


const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actinoTypes.CHANGE_TOP_BANNERS: {
      return { ...state, topBanners: action.topBanners };
    }
    default:
      return state;
  }
}

export default reducer;