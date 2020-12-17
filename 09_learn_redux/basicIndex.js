const redux = require('redux')
const {createStore} = redux;


const INCREMENT = "increment"
const DECREMENT = "decrement"
const ADD_NUM = "add_number"
const SUB_NUM = "sub_number"


// init state
const initialState = {
  counter: 1
}

// reducer
const reducer = function(preState = initialState, action) {
  switch(action.type) {
    case INCREMENT: {
      return {...preState, counter: preState.counter + 1}
    }
    case DECREMENT: {
      return {
        ...preState, counter: preState.counter - 1
      }
    }
    case ADD_NUM: {
      return {
        ...preState, counter: preState.counter + action.num
      }
    }
    case SUB_NUM: {
      return {
        ...preState, counter: preState.counter - action.num
      }
    }
    default: {
      return preState;
    }
  }
}

// create stroe
const store = redux.createStore(reducer);

// subscribe
store.subscribe(() => {
  console.log('数据改变了，', store.getState().counter);
})

// actions
const incrementAction = {
  type: INCREMENT
}

const decrementAction = {
  type: DECREMENT
}

const add5Action = {
  type: ADD_NUM,
  num: 5
}

const sub6Action = {
  type: SUB_NUM,
  num: 6
}

// dispatch
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(add5Action);
store.dispatch(sub6Action);