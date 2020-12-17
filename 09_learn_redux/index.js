import store from './store/index.js'
import {
  increment,
  decrement,
  addNum,
  subNum
} from './store/actionCreator.js'

store.subscribe(() => {
  console.log('***************** ', store.getState());
})
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(addNum(3))
store.dispatch(subNum(8))

