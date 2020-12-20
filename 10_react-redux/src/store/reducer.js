import {
  INCREMENT, DECREMENT
} from './const'


const initalState = {
  counter: 0
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, counter: state.counter + action.num }
    }
    case DECREMENT: {
      return { ...state, counter: state.counter - action.num }
    }
    default:
      return state
  }
}