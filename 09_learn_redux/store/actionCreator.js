import {
  INCREMENT, DECREMENT, ADD_NUM, SUB_NUM
} from './const.js'

export function increment() {
  return {
    type: INCREMENT,
    num: 1
  }
}


export function decrement() {
  return {
    type: DECREMENT,
    num: 1
  }
}


export function addNum(num) {
  return {
    type: ADD_NUM,
    num
  }
}


export function subNum(num) {
  return {
    type: SUB_NUM,
    num
  }
}