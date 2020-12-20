import {
  INCREMENT, DECREMENT
} from './const.js'


export const increment = (num = 1) => {
  return {
    type: INCREMENT,
    num
  }
}

export const decrement = (num = 1) => {
  return {
    type: DECREMENT,
    num
  }
}